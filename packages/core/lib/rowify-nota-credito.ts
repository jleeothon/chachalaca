import {getO as gO, getS as gS} from './safe-get';
import processDate from './process-date';

import RowNotaCredito from './row-nota-credito';
import {Autorizacion, TotalImpuesto} from './autorizacion';

/*
Tabla 21
a continuación se detallan los valores sub totales y totales con impuestos que
deben constar en los comprobantes de venta, según el caso.
*/

function findImpuesto(
	totalImpuestoArray: TotalImpuesto[],
	codigo: string,
	codigoPorcentaje?: string
): TotalImpuesto {
	const result = totalImpuestoArray.find((totalImpuesto) => {
		const c = totalImpuesto.codigo[0];
		const cp = totalImpuesto.codigoPorcentaje[0];
		return c === codigo && (!codigoPorcentaje || cp === codigoPorcentaje);
	});
	if (!result) {
		return {
			valor: [],
			baseImponible: [],
			codigo: [],
			codigoPorcentaje: [],
			tarifa: []
		};
	}

	return result;
}

export default function rowifyNotaCredito(
	autorizacion: Autorizacion
): RowNotaCredito {
	const {notaCredito} = autorizacion.comprobante;
	if (!notaCredito) {
		throw new Error('Not notaCredito');
	}

	const estab = gS(notaCredito, 'infoTributaria.0.estab.0');
	const fecha = processDate(
		gS(notaCredito, 'infoNotaCredito.0.fechaEmision.0')
	);
	const numberAutorizacion = gS(autorizacion, 'numeroAutorizacion.0');
	const proveedor = gS(notaCredito, 'infoTributaria.0.razonSocial.0');
	const ptoEmi = gS(notaCredito, 'infoTributaria.0.ptoEmi.0');
	const ruc = gS(notaCredito, 'infoTributaria.0.ruc.0');
	const secuencial = gS(notaCredito, 'infoTributaria.0.secuencial.0');
	const total = gS(notaCredito, 'infoNotaCredito.0.valorModificacion.0');

	const totalImpuestoArray = gO(
		notaCredito,
		'infoNotaCredito.0.totalConImpuestos.0.totalImpuesto'
	) as TotalImpuesto[];
	const impuestoIva = findImpuesto(totalImpuestoArray, '2', '2');
	const impuestoIce = findImpuesto(totalImpuestoArray, '3');
	const impuesto0 = findImpuesto(totalImpuestoArray, '2', '0');

	const {
		valor: [iva = ''],
		baseImponible: [tarifa12 = '']
	} = impuestoIva;
	const {
		valor: [ice = ''],
		baseImponible: [tarifa15 = '']
	} = impuestoIce;
	const {
		baseImponible: [tarifa0 = '']
	} = impuesto0;

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
