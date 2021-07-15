const {parseStringPromise} = require('xml2js');

function parseFaultyDocument(value) {
	const autorizacion = value['soap:Envelope']['soap:Body']['0']['ns2:autorizacionComprobanteResponse']['0']['RespuestaAutorizacionComprobante']['0']['autorizaciones']['0']['autorizacion']['0'];
	return autorizacion;
}

module.exports.parseRaw = async function (content) {
	const value = await parseStringPromise(content, {trim: true});
	let autorizacion = null;
	if (value.autorizacion) {
		autorizacion = value.autorizacion;
	} else {
		autorizacion = parseFaultyDocument(value);
	}

	const comprobanteText = autorizacion.comprobante[0];
	if (!comprobanteText) {
		throw new Error('Parsing error');
	}

	const comprobante = await parseStringPromise(comprobanteText, {trim: true});
	return {...autorizacion, comprobante: [comprobante]};
};
