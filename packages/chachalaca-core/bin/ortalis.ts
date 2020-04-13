#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

import {Seq as seq} from 'immutable';
import * as glob from 'glob';
import * as program from 'commander';

import generateXlsx from '../lib/generate-xlsx';
import log from '../lib/log';
import parseInvoice from '../lib/parse';
import rowifyComprobanteRetencion from '../lib/rowify-comprobante-retencion';
import rowifyFactura from '../lib/rowify-factura';
import rowifyNotaCredito from '../lib/rowify-nota-credito';
import triageAutorizacion from '../lib/triage-autorizacion';
import RowFactura from '../lib/row-factura';
import RowCr from '../lib/row-comprobante-retencion';
import RowNotaCredito from '../lib/row-nota-credito';
import {Autorizacion} from '../lib/autorizacion';

const {readFile} = fs.promises;

async function generateAction(source: string, destination: string): Promise<void> {
	const globPath = path.join(source, '**', '*.xml');
	log.info({path: globPath}, 'Glob to search');
	const fileCandidates = glob.sync(globPath);
	log.info({files: fileCandidates}, 'Getting files');

	const xmlFiles = fileCandidates.filter(f => f.endsWith('.xml'));

	const readOpts = {encoding: 'UTF-8', flag: 'r'};
	const fileContentsArray = await Promise.all(xmlFiles.map(async (f: string) => readFile(f, readOpts)));
	const parsedObjects = await Promise.all(fileContentsArray.map(async (c: string) => parseInvoice(c)));
	const triagedObs = seq(parsedObjects).groupBy(triageAutorizacion).toJS();
	const {
		factura: fArray = [],
		comprobanteRetencion: crArray = [],
		notaCredito: ncArray = []
	}: {
		factura: Autorizacion[];
		comprobanteRetencion: Autorizacion[];
		notaCredito: Autorizacion[];
	} = triagedObs;

	const counts = {
		facturaCount: fArray.length,
		comprobanteRetencionCount: crArray.length,
		notaCreditoCount: ncArray.length
	};
	log.info(counts, 'Comprobante count');

	const rowPromises = (await Promise.all([
		Promise.all(fArray.map(async i => rowifyFactura(i))),
		Promise.all(crArray.map(async i => rowifyComprobanteRetencion(i))),
		Promise.all(ncArray.map(async i => rowifyNotaCredito(i)))
	])) as [RowFactura[], RowCr[], RowNotaCredito[]];

	const [facturaRows, crRows, ncRows] = rowPromises;
	await generateXlsx(destination, facturaRows, crRows, ncRows);
}

async function safeGenerateAction(source: string, destination: string): Promise<void> {
	try {
		await generateAction(source, destination);
	} catch (err) {
		log.error({err}, 'Error occurred in command');
		process.exitCode = 1;
	}
}

program
	.command('generate [source] [destination]')
	.action(safeGenerateAction);
program.parseAsync(process.argv);
