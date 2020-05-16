import {getS, getO} from './safe-get';

import RowCr from './row-comprobante-retencion';
import {Autorizacion, Impuesto} from './autorizacion';
import processDate from './process-date';

/*
Tabla 21
a continuación se detallan los valores sub totales y totales con impuestos que
deben constar en los comprobantes de venta, según el caso.
*/

function findImpuesto(impuestoArr: Impuesto[], codigo: string): Impuesto {
	return impuestoArr.find(impuesto => {
		return getS(impuesto, 'codigo.0') === codigo;
	});
}

export default function rowifyComprobanteRetencion(autorizacion: Autorizacion): RowCr {
	const {comprobanteRetencion} = autorizacion.comprobante;
	if (!comprobanteRetencion) {
		throw new Error('Not comprobanteRetencion');
	}

	const impuestos = getO(comprobanteRetencion, 'impuestos.0.impuesto') as Impuesto[];
	const impuestoRenta = findImpuesto(impuestos, '1');
	const impuestoIva = findImpuesto(impuestos, '2');

	const rawFecha: string = getS(comprobanteRetencion, 'infoCompRetencion.0.fechaEmision.0');

	const fecha = processDate(rawFecha);
	const concepto = '';
	const baseRenta = getS(impuestoRenta, 'baseImponible.0', '');
	const baseImpIva = getS(impuestoIva, 'baseImponible.0', '');
	const porcentajeRenta = Number.parseFloat(getS(impuestoRenta, 'porcentajeRetener.0', '0')) / 100;
	const porcentajeIva = Number.parseFloat(getS(impuestoIva, 'porcentajeRetener.0', '0')) / 100;
	const numeroFacturaEmitida = getS(impuestoRenta, 'numDocSustento.0', '');
	const numeroAutorizacionFactura = '?';
	const rucBeneficiario = getS(comprobanteRetencion, 'infoTributaria.0.ruc.0');
	const beneficiario = getS(
		comprobanteRetencion,
		'infoTributaria.0.razonSocial.0'
	);
	const compRetencion1 = getS(comprobanteRetencion, 'infoTributaria.0.estab.0');
	const compRetencion2 = getS(comprobanteRetencion, 'infoTributaria.0.ptoEmi.0');
	const compRetencion3 = getS(
		comprobanteRetencion,
		'infoTributaria.0.secuencial.0'
	);
	const retRenta = Number.parseFloat(getS(impuestoRenta, 'valorRetenido.0', '0.00'));
	const retIva = Number.parseFloat(getS(impuestoIva, 'valorRetenido.0', '0.00'));
	const autRetencion = '?';

	const row = new RowCr({
		fecha,
		concepto,
		baseRenta,
		baseImpIva,
		porcentajeRenta,
		porcentajeIva,
		numeroFacturaEmitida,
		numeroAutorizacionFactura,
		rucBeneficiario,
		beneficiario,
		compRetencion1,
		compRetencion2,
		compRetencion3,
		retRenta,
		retIva,
		autRetencion
	});

	return row;
}
