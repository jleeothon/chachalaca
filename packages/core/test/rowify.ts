import * as fs from 'fs';
import * as path from 'path';

import test from 'ava';

import parse from '../lib/parse';
import rowifyFactura from '../lib/rowify-factura';
import rowifyComprobanteRetencion from '../lib/rowify-comprobante-retencion';
import rowifyNotaCredito from '../lib/rowify-nota-credito';
import {Autorizacion} from '../lib/autorizacion';

function parseInput(filePath): Autorizacion {
	const testXmlPath = path.join(__dirname, 'test-input', filePath);
	const content = fs.readFileSync(testXmlPath, {flag: 'r', encoding: 'utf-8'});
	const parsedObject = parse(content);
	return parsedObject;
}

function parseOutput(filePath): Record<string, unknown> {
	const resultPath = path.join(__dirname, 'test-input', filePath);
	const content = fs.readFileSync(resultPath, {flag: 'r', encoding: 'utf-8'});
	const object = JSON.parse(content);
	return object;
}

// TODO fix the date test

function testFactura(t, inputFile, outputFile): void {
	const parsedObject = parseInput(inputFile);
	const expectedResult = {...parseOutput(outputFile), fecha: null};
	const row = {...rowifyFactura(parsedObject), fecha: null};
	t.deepEqual(expectedResult, row, 'Actual: ' + JSON.stringify(row));
}

function testComprobante(t, inputFile, outputFile): void {
	const parsedObject = parseInput(inputFile);
	const expectedResult = {...parseOutput(outputFile), fecha: null};
	const row = {...rowifyComprobanteRetencion(parsedObject), fecha: null};
	t.deepEqual(expectedResult, row, 'Actual: ' + JSON.stringify(row));
}

function testNota(t, inputFile, outputFile): void {
	const parsedObject = parseInput(inputFile);
	const expectedResult = {...parseOutput(outputFile), fecha: null};
	const row = {...rowifyNotaCredito(parsedObject), fecha: null};
	t.deepEqual(expectedResult, row, 'Actual: ' + JSON.stringify(row));
}

test('Factura 1', testFactura, 'factura1.xml', 'factura1.json');
test('Factura 2', testFactura, 'factura2.xml', 'factura2.json');
test('Factura 3', testFactura, 'factura3.xml', 'factura3.json');

test(
	'Comprobante 1 - Impuesto codigo 2',
	testComprobante,
	'comprobante-1.xml',
	'comprobante-1.json'
);

test(
	'Comprobante 2 - Impuesto codigo 1',
	testComprobante,
	'comprobante-2.xml',
	'comprobante-2.json'
);

test(
	'Nota de crédito 1',
	testNota,
	'nota-1.xml',
	'nota-1.json'
);
