const {readFileSync} = require('fs');
const {join} = require('path');

const test = require('ava');

const {parseRaw} = require('../lib/parse-raw');
const {processAutorizacion} = require('../lib/process-autorizacion');
const parse = require('..');

async function twoStepTest(t, inputFileName, rawFileName, processedFileName) {
	const testXmlPath = join(__dirname, '..', 'test-input', inputFileName);
	const input = readFileSync(testXmlPath, {flag: 'r', encoding: 'utf-8'});

	const rawActual = await parseRaw(input);
	const rawExpected = require(rawFileName);
	await t.deepEqual(rawExpected, rawActual, JSON.stringify(rawActual));

	const processed = await processAutorizacion(rawActual);
	const expected = require(processedFileName);
	await t.deepEqual(expected, processed, JSON.stringify(processed));

	const parsed = await parse(input);
	await t.deepEqual(expected, parsed, JSON.stringify(parsed));
}

test('comprobante 1', async (t) => {
	await twoStepTest(
		t,
		'comprobante-1.xml',
		'./_comprobante-1-raw',
		'./_comprobante-1'
	);
});

test('comprobante 2', async (t) => {
	await twoStepTest(
		t,
		'comprobante-2.xml',
		'./_comprobante-2-raw',
		'./_comprobante-2'
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

test('Factura 4', async (t) => {
	await twoStepTest(t, 'factura-4.xml', './_factura-4-raw', './_factura-4');
});

test('Factura 5', async (t) => {
	await twoStepTest(t, 'factura-5.xml', './_factura-5-raw', './_factura-5');
});

test('Factura 6', async (t) => {
	await twoStepTest(t, 'factura-6.xml', './_factura-6-raw', './_factura-6');
});

test('Factura 7', async (t) => {
	await twoStepTest(t, 'factura-7.xml', './_factura-7-raw', './_factura-7');
});

test('Factura 8', async (t) => {
	await twoStepTest(t, 'factura-8.xml', './_factura-8-raw', './_factura-8');
});

test('Nota 1', async (t) => {
	await twoStepTest(t, 'nota-1.xml', './_nota-1-raw', './_nota-1');
});
