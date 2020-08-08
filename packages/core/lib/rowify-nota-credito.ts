import RowNotaCredito from './row-nota-credito';
import {Autorizacion, TotalImpuesto} from './autorizacion';

import * as parser from '@jleeothon/chachalaca-parser';

/*
Tabla 21
a continuación se detallan los valores sub totales y totales con impuestos que
deben constar en los comprobantes de venta, según el caso.
*/

function findImpuesto(
	totalImpuestoArray: parser.TotalImpuesto[],
	codigo: string,
	codigoPorcentaje?: string
): parser.TotalImpuesto {
	const result = totalImpuestoArray.find((totalImpuesto) => {
		const c = totalImpuesto.codigo[0];
		const cp = totalImpuesto.codigoPorcentaje[0];
		return c === codigo && (!codigoPorcentaje || cp === codigoPorcentaje);
	});
	if (!result) {
		return {
			valor: 0,
			baseImponible: 0,
			codigo: '',
			codigoPorcentaje: '',
			tarifa: 0
		};
	}

	return result;
}

export default function rowifyNotaCredito(
	autorizacion: parser.Autorizacion
): RowNotaCredito {
	const {notaCredito} = autorizacion.comprobante;
	if (!notaCredito) {
		throw new Error('Not notaCredito');
	}

	const {estab} = notaCredito.infoTributaria;
	const fecha = notaCredito.infoNotaCredito.fechaEmision;
	const numberAutorizacion = autorizacion.numeroAutorizacion;
	const proveedor = notaCredito.infoTributaria.razonSocial;
	const {ptoEmi} = notaCredito.infoTributaria;
	const {ruc} = notaCredito.infoTributaria;
	const {secuencial} = notaCredito.infoTributaria;
	const total = notaCredito.infoNotaCredito.valorModificacion;

	const totalImpuestoArray = notaCredito.infoNotaCredito.totalConImpuestos;
	const impuestoIva = findImpuesto(totalImpuestoArray, '2', '2');
	const impuestoIce = findImpuesto(totalImpuestoArray, '3');
	const impuesto0 = findImpuesto(totalImpuestoArray, '2', '0');

	const iva = impuestoIva.valor;
	const ice = impuestoIce.valor;
	const tarifa0 = impuesto0.baseImponible;
	const tarifa12 = impuestoIva.baseImponible;
	const tarifa15 = impuestoIce.baseImponible;

	return new RowNotaCredito({
		autorizacion: numberAutorizacion,
		concepto: '',
		estab,
		fecha,
		ice,
		iva,
		proveedor,
		ptoEmi,
		ruc,
		secuencial,
		tarifa0,
		tarifa12,
		tarifa15,
		total
	});
}
