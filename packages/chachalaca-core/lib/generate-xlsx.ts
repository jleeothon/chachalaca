import * as XlsxPopulate from 'xlsx-populate';

import coordinateToCell from './coordinate-to-cell';
import Header from './header';
import headers from './headers-factura';
import headersCr from './headers-comprobante-retencion';
import headersNc from './headers-notas-credito';
import log from './log';
import colNum from './number-to-column';
import RowCr from './row-comprobante-retencion';
import RowFactura from './row-factura';
import RowNotaCredito from './row-nota-credito';

function addComprobanteRetencionSheet(workbook, comprobanteRetencionRows: RowCr[]): void {
	const sheet = workbook.addSheet('Comprobantes');

	headersCr.forEach((h: Header, i: number) => {
		sheet.cell(`${colNum(i)}1`).value(h.name);
		sheet.column(colNum(i)).style('numberFormat', h.numberFormat);
	});
	sheet.row(1).style('numberFormat', '@');

	comprobanteRetencionRows.forEach((r, rowNum) => {
		r.toArray().forEach((c, colNum) => {
			const cell = coordinateToCell(rowNum + 2, colNum);
			sheet.cell(cell).value(c);
		});
	});
}

function addFacturaSheet(workbook, facturaRows: RowFactura[]): void {
	const sheet = workbook.sheet(0).name('Facturas');

	// Headers and styles
	headers.forEach((h: Header, i: number) => {
		sheet.column(colNum(i)).style('numberFormat', h.numberFormat);
		sheet.cell(`${colNum(i)}1`).value(h.name);
	});
	sheet.row(1).style('numberFormat', '@');

	// Values
	facturaRows.forEach((r, rowNum) => {
		r.toArray().forEach((c, colNum) => {
			const cell = coordinateToCell(rowNum + 2, colNum);
			sheet.cell(cell).value(c);
		});
	});
}

function addNotaCreditoSheet(workbook, notaCreditoRows: RowNotaCredito[]): void {
	const sheet = workbook.addSheet('Notas de Crédito');

	// Headers and styles
	headersNc.forEach((h: Header, i: number) => {
		sheet.cell(`${colNum(i)}1`).value(h.name);
		sheet.column(colNum(i)).style('numberFormat', h.numberFormat);
	});
	sheet.row(1).style('numberFormat', '@');

	// Values
	notaCreditoRows.forEach((r, rowNum) => {
		r.toArray().forEach((c, colNum) => {
			const cell = coordinateToCell(rowNum + 2, colNum);
			sheet.cell(cell).value(c);
		});
	});
}

export default async function generateXlsx(
	path: string,
	facturaRows: RowFactura[],
	comprobanteRetencionRows: RowCr[],
	notaCreditoRows: RowNotaCredito[]
): Promise<void> {
	const info = {
		path,
		facturaRows: facturaRows.length,
		comprobanteRetencionRows: comprobanteRetencionRows.length,
		notaCreditoRows: notaCreditoRows.length
	};
	log.info({info}, 'Will write to path');

	const workbook = await XlsxPopulate.fromBlankAsync();

	addFacturaSheet(workbook, facturaRows);
	addComprobanteRetencionSheet(workbook, comprobanteRetencionRows);
	addNotaCreditoSheet(workbook, notaCreditoRows);

	await workbook.toFileAsync(path);
}
