import * as dotProp from 'dot-prop';
import is from '@sindresorhus/is';

import RowFactura from './row-factura';

import {Autorizacion, Factura, TotalImpuesto} from './autorizacion';

interface Totals {
	tarifa0: string;
	tarifa12: string;
	tarifa15: string;
	iva: string;
	ice: string;
	total: string;
}

function get(obj: Record<string, unknown>, path: string, defaultValue?: string): string {
	const value = dotProp.get(obj, path, defaultValue);
	if (is.undefined(value)) {
		throw new Error(`Path ${path} not found`);
	}

	return value;
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

function findImpuesto(totalImpuestoArr: TotalImpuesto[], codigo: string, codigoPorcentaje?: string): Partial<TotalImpuesto> {
	const result = totalImpuestoArr.find(elem => {
		const [codigo2] = elem.codigo;
		const [codigoPorcentaje2] = elem.codigoPorcentaje;
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

function getTotalsFromFactura(factura: Factura): Totals {
	const totalImpuestoArr = factura.infoFactura[0].totalConImpuestos[0].totalImpuesto;

	const summary0 = findImpuesto(totalImpuestoArr, '2', '0');
	const summary12 = findImpuesto(totalImpuestoArr, '2', '2');
	const summary15 = findImpuesto(totalImpuestoArr, '3');

	const summariesStr = {
		tarifa0: get(summary0, 'baseImponible.0', '0'),
		tarifa12: get(summary12, 'baseImponible.0', '0'),
		tarifa15: get(summary15, 'baseImponible.0', '0'),
		iva: get(summary12, 'valor.0', '0'),
		ice: get(summary15, 'valor.0', '0')
	};

	const mappedSummaries = Object.entries(summariesStr).map(([k, v]) => [k, parseFloat(v)]);
	const summaries = Object.fromEntries(mappedSummaries);
	return {
		...summaries,
		total: Number.parseFloat(factura.infoFactura[0].importeTotal[0])
	};
}

function formaPagoToString(num: string): string {
	if (num === '20') {
		return 'TC';
	}

	if (num === '01') {
		return 'EFECT';
	}

	return num;
}

export default function rowifyFactura(autorizacion: Autorizacion): RowFactura {
	const {factura} = autorizacion.comprobante;
	if (!factura) {
		throw new Error('Not factura');
	}

	const totals = getTotalsFromFactura(factura);
	const rawFecha = get(factura, 'infoFactura.0.fechaEmision.0');
	const [day, month, year] = rawFecha.split('/').map(s => parseInt(s, 10));
	const fecha = new Date(year, month - 1, day);

	const numFacPaths = [
		'infoTributaria.0.estab.0',
		'infoTributaria.0.ptoEmi.0',
		'infoTributaria.0.secuencial.0'
	];
	const [estabRaw, ptoEmiRaw, secuencialRaw] = numFacPaths.map(path => get(factura, path));
	const estab = estabRaw.padStart(3, '0');
	const ptoEmi = ptoEmiRaw.padStart(3, '0');
	const secuencial = secuencialRaw.padStart(9, '0');

	const proveedor = get(
		autorizacion,
		'comprobante.factura.infoTributaria.0.razonSocial.0'
	);
	const ruc = get(
		autorizacion,
		'comprobante.factura.infoTributaria.0.ruc.0'
	);

	const formaDePagoRaw = get(factura, 'infoFactura.0.pagos.0.pago.0.formaPago.0', null);
	const formaDePago = (formaDePagoRaw && formaPagoToString(formaDePagoRaw)) || '';

	const codigo = '';
	const numAutorizacion = `${autorizacion.numeroAutorizacion[0]}`;

	const row = new RowFactura(
		{
			fecha, estab, ptoEmi, secuencial, proveedor, formaDePago, ruc,
			autorizacion: numAutorizacion, concepto: '', codigo, ...totals
		}
	);

	return row;
}
