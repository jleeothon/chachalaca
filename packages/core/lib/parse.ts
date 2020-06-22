import xml2js = require('xml2js');

import {Autorizacion, RawAutorizacion, Comprobante} from './autorizacion';

const {parseString} = xml2js;

function getAutorizacion(content: string): RawAutorizacion {
	let result = null;
	parseString(content, (err: Error, value: {autorizacion: RawAutorizacion}) => {
		if (err) {
			throw err;
		}

		if (!value.autorizacion) {
			throw new Error('No authorization found');
		}

		result = value.autorizacion;
	});
	return result;
}

export default function (content: string): Autorizacion {
	const rawAutorizacion = getAutorizacion(content);
	const [comprobanteText] = rawAutorizacion.comprobante;
	let comprobanteObject;
	parseString(comprobanteText, (err: Error, value: Comprobante) => {
		if (err) {
			throw err;
		}

		const {factura, comprobanteRetencion, notaCredito} = value;
		if (!factura && !comprobanteRetencion && !notaCredito) {
			throw new Error(
				'Could not find factura or comprobanteRetencion or notaCredito'
			);
		}

		comprobanteObject = {factura, comprobanteRetencion, notaCredito};
	});
	const autorizacion = {...rawAutorizacion, comprobante: comprobanteObject};
	return autorizacion;
}
