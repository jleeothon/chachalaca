import RowCr from './row-comprobante-retencion';
import {Autorizacion, Impuesto} from './autorizacion';

import * as parser from '@jleeothon/chachalaca-parser';

/*
Tabla 21
a continuación se detallan los valores sub totales y totales con impuestos que
deben constar en los comprobantes de venta, según el caso.
*/

function findImpuesto(
	impuestos: parser.Impuesto[],
	codigo: string
): parser.Impuesto {
	return impuestos.find((impuesto) => impuesto.codigo === codigo);
}

export default function rowifyComprobanteRetencion(
	autorizacion: parser.Autorizacion
): RowCr {
	const {comprobanteRetencion} = autorizacion.comprobante;
	if (!comprobanteRetencion) {
		throw new Error('Not comprobanteRetencion');
	}

	const {impuestos} = comprobanteRetencion;
	const impuestoRenta = findImpuesto(impuestos, '1');
	const impuestoIva = findImpuesto(impuestos, '2');

	const fecha = comprobanteRetencion.infoCompRetencion.fechaEmision;

	const concepto = '';
	const baseRenta = impuestoRenta?.baseImponible;
	const baseImpIva = impuestoIva?.baseImponible;
	const porcentajeRenta = impuestoRenta?.porcentajeRetener / 100;
	const porcentajeIva = impuestoIva?.porcentajeRetener / 100;

	const numeroFacturaEmitida = impuestoRenta?.numDocSustento;
	const numeroAutorizacionFactura = '?';
	const rucBeneficiario = comprobanteRetencion.infoTributaria.ruc;
	const beneficiario = comprobanteRetencion.infoTributaria.razonSocial;
	const compRetencion1 = comprobanteRetencion.infoTributaria.estab;
	const compRetencion2 = comprobanteRetencion.infoTributaria.ptoEmi;
	const compRetencion3 = comprobanteRetencion.infoTributaria.secuencial;
	const returnValueRenta = impuestoRenta?.valorRetenido;
	const returnValueIva = impuestoIva?.valorRetenido;
	const autRetencion = '?';

	const row = new RowCr({
		fecha,
		concepto,
		baseImpIva,
		baseRenta,
		porcentajeRenta,
		porcentajeIva,
		numeroFacturaEmitida,
		numeroAutorizacionFactura,
		rucBeneficiario,
		beneficiario,
		compRetencion1,
		compRetencion2,
		compRetencion3,
		retRenta: returnValueRenta,
		retIva: returnValueIva,
		autRetencion
	});

	return row;
}
