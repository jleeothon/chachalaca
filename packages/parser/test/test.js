const {readFileSync} = require('fs');
const {join} = require('path');

const test = require('ava');

const {getRawAutorizacion} = require('../lib/raw-parser');
const {processAutorizacion} = require('../lib/processors');
const parse = require('..');

async function twoStepTest(t, inputFileName, rawFileName, processedFileName) {
	const testXmlPath = join(__dirname, '..', 'test-input', inputFileName);
	const input = readFileSync(testXmlPath, {flag: 'r', encoding: 'utf-8'});

	const rawActual = await getRawAutorizacion(input);
	const rawExpected = require(rawFileName);
	await t.deepEqual(rawActual, rawExpected, JSON.stringify(rawActual));

	const processed = await processAutorizacion(rawActual);
	const expected = require(processedFileName);
	await t.deepEqual(processed, expected, JSON.stringify(processed));

	const parsed = await parse(input);
	await t.deepEqual(parsed, expected, JSON.stringify(parsed));
}

test('Comprobante 1', async (t) => {
	await twoStepTest(
		t,
		'comprobante-1.xml',
		'./_comprobante-1-raw',
		'./_comprobante-1'
	);
});

test('Factura 1', async (t) => {
	await twoStepTest(t, 'factura-1.xml', './_factura-1-raw', './_factura-1');
});

test('Factura 2', async (t) => {
	await twoStepTest(t, 'factura-2.xml', './_factura-2-raw', './_factura-2');
});

test('Factura 3', async (t) => {
	await twoStepTest(t, 'factura-3.xml', './_factura-3-raw', './_factura-3');
});

test('Nota 1', async (t) => {
	await twoStepTest(t, 'nota-1.xml', './_nota-1-raw', './_nota-1');
});
