import * as parser from '@jleeothon/chachalaca-parser';

import RowFactura from './row-factura';

interface Totals {
	tarifa0: number;
	tarifa12: number;
	tarifa15: number;
	iva: number;
	ice: number;
	total: number;
}

/*
Tabla 16 - Códigos de los impuestos
IVA => 2
ICE => 3
IRBPNR => 5

Tabla 17 - Tarifa del IVA
0% => 0
12% => 2
14% => 3
No Objeto de Impuesto => 6
Exento de IVA => 7
*/

function findImpuesto(
	totalImpuestoArray: parser.TotalImpuesto[],
	codigo: string,
	codigoPorcentaje?: string
): Partial<parser.TotalImpuesto> {
	const result = totalImpuestoArray.find((element) => {
		const codigo2 = element.codigo;
		const codigoPorcentaje2 = element.codigoPorcentaje;
		if (codigoPorcentaje) {
			return codigo2 === codigo && codigoPorcentaje2 === codigoPorcentaje;
		}

		return codigo2 === codigo;
	});
	if (!result) {
		return {};
	}

	return result;
}

function getTotalsFromFactura(factura: parser.Factura): Totals {
	const totalImpuestoArray = factura.infoFactura.totalConImpuestos;

	const summary0 = findImpuesto(totalImpuestoArray, '2', '0');
	const summary12 = findImpuesto(totalImpuestoArray, '2', '2');
	const summary15 = findImpuesto(totalImpuestoArray, '3');

	const summaries = {
		tarifa0: summary0?.baseImponible || 0,
		tarifa12: summary12?.baseImponible || 0,
		tarifa15: summary15?.baseImponible || 0,
		iva: summary12?.valor || 0,
		ice: summary15?.valor || 0
	};

	return {
		...summaries,
		total: factura.infoFactura.importeTotal
	};
}

function formaPagoToString(formaPago: string): string {
	if (formaPago === '20') {
		return 'TC';
	}

	if (formaPago === '01') {
		return 'EFECT';
	}

	return formaPago;
}

export default function rowifyFactura(
	autorizacion: parser.Autorizacion
): RowFactura {
	const {factura} = autorizacion.comprobante;
	if (!factura) {
		throw new TypeError('Not factura');
	}

	const totals = getTotalsFromFactura(factura);
	const fecha = factura.infoFactura.fechaEmision;

	const {estab} = factura.infoTributaria;
	const {ptoEmi} = factura.infoTributaria;
	const {secuencial} = factura.infoTributaria;

	const proveedor = autorizacion.comprobante.factura.infoTributaria.razonSocial;
	const {ruc} = factura.infoTributaria;

	const {pagos} = factura.infoFactura;
	const formaDePagoRaw =
		pagos && pagos.length === 1 ? pagos[0].formaPago : 'OTRO';
	const formaDePago = formaDePagoRaw && formaPagoToString(formaDePagoRaw);

	const codigo = '';
	const {numeroAutorizacion} = autorizacion;

	const row = new RowFactura({
		fecha,
		estab,
		ptoEmi,
		secuencial,
		proveedor,
		formaDePago,
		ruc,
		autorizacion: numeroAutorizacion,
		concepto: '',
		codigo,
		...totals
	});

	return row;
}
