const lazy = require('lazy.js');
const XlsxPopulate = require('xlsx-populate');

const headers = require('./headers');

const aCode = 'A'.charCodeAt();

const coordinateToCell = (i, j) =>
	String.fromCharCode(aCode + j) + (i + 1).toString();

/**
 * @param {string} path - The path to the file that will be created.
 * @param {{Symbol.iterator}} rows - An iterable of row objects.
 */
async function generateXlsx(path, rows) {
	const lazyRows = lazy(rows);
	const workbook = await XlsxPopulate.fromBlankAsync();
	const sheet1 = workbook.sheet('Sheet1');
	setColumnStyles(sheet1);
	sheet1.row(1).style('numberFormat', '@');
	writeHeaders(sheet1);
	lazyRows.forEach((r, i) => {
		r.toArray().forEach((c, j) => {
			const cell = coordinateToCell(i + 1, j);
			console.log(`${cell}: ${c}`);
			sheet1.cell(cell).value(c);
		});
	});
	await workbook.toFileAsync(path);
}

function setColumnStyles(sheet) {
	headers.forEach((h, i) =>
		sheet.column(numberToLetter(i)).style('numberFormat', h.numberFormat)
	);
}

function writeHeaders(sheet) {
	headers.forEach((h, i) =>
		console.log("****" ,`${String.fromCharCode(aCode + i)}1`, h.get('name')) && sheet.cell(`${String.fromCharCode(aCode + i)}1`).value(h.get('name'))
	);
}

function numberToLetter(i) {
	return String.fromCharCode(aCode + i);
}

module.exports = generateXlsx;
