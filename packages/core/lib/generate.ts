#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

import * as VError from 'verror';

import * as glob from 'glob';

import generateXlsx from './generate-xlsx';
import log from './log';
import parseInvoice from './parse';
import rowifyComprobanteRetencion from './rowify-comprobante-retencion';
import rowifyFactura from './rowify-factura';
import rowifyNotaCredito from './rowify-nota-credito';
import triageAutorizacion from './triage-autorizacion';
import RowFactura from './row-factura';
import RowCr from './row-comprobante-retencion';
import RowNotaCredito from './row-nota-credito';

const {readFile} = fs.promises;

declare type AnyRow = RowFactura | RowCr | RowNotaCredito;

async function doProcessFile(
	path: string
): Promise<{type: string; row: AnyRow}> {
	const content = await readFile(path, 'utf-8');
	const parsedObject = await parseInvoice(content);
	const type = triageAutorizacion(parsedObject);
	const mapping = {
		factura: rowifyFactura,
		comprobanteRetencion: rowifyComprobanteRetencion,
		notaCredito: rowifyNotaCredito
	};
	const row = mapping[type](parsedObject);
	return {type, row};
}

async function processFile(path: string): Promise<{type: string; row: AnyRow}> {
	try {
		return await doProcessFile(path);
	} catch (error) {
		throw new VError(error, 'Error parsing "%s"', path);
	}
}

export default async function generate(
	source: string,
	destination: string
): Promise<void> {
	const globPath = path.join(source, '**', '*.xml');
	log.info({path: globPath}, 'Glob to search');
	const fileCandidates = glob.sync(globPath);
	log.info({files: fileCandidates}, 'Getting files');

	const xmlFiles = fileCandidates.filter((f) => f.endsWith('.xml'));

	const processed = await Promise.all(
		xmlFiles.map(async (path) => processFile(path))
	);

	const arrays: {
		factura: RowFactura[];
		comprobanteRetencion: RowCr[];
		notaCredito: RowNotaCredito[];
	} = {factura: [], comprobanteRetencion: [], notaCredito: []};
	processed.forEach(({type, row}) => {
		arrays[type].push(row);
	});
	const {
		factura: facturaRows,
		comprobanteRetencion: crRows,
		notaCredito: ncRows
	} = arrays;

	const counts = {
		factura: facturaRows.length,
		comprobanteRetencion: crRows.length,
		notaCredito: ncRows.length
	};
	log.info(counts, 'Comprobante count');

	await generateXlsx(destination, facturaRows, crRows, ncRows);
}
