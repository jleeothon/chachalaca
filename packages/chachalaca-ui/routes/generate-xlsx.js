const lazy = require('lazy.js');
const XlsxPopulate = require('xlsx-populate');

const aCode = 'A'.charCodeAt();

const coordinateToCell = (i, j) =>
	String.fromCharCode(aCode + j) + (i + 1).toString();

/**
 * @param {string} path - The path to the file that will be created.
 * @param {{Symbol.iterator}} rows - An iterable of row objects.
 */
const generateXlsx = async function(path, rows) {
	const lazyRows = lazy(rows);
	const workbook = await XlsxPopulate.fromBlankAsync();
	const sheet1 = workbook.sheet('Sheet1');
	lazyRows.forEach((r, i) => {
		r.toArray().forEach((c, j) => {
			const cell = coordinateToCell(i, j);
			console.log(`${cell}: ${c}`);
			sheet1.cell(cell).value(c);
		});
	});
	await workbook.toFileAsync(path);
};

module.exports = generateXlsx;
