const {parseStringPromise} = require('xml2js');

module.exports.parseRaw = async function (content) {
	const value = await parseStringPromise(content, {trim: true});
	if (!value.autorizacion) {
		throw new Error('No authorization found');
	}

	const comprobanteText = value.autorizacion.comprobante[0];
	if (!comprobanteText) {
		throw new Error('No comprobante found');
	}

	const comprobante = await parseStringPromise(comprobanteText, {trim: true});
	return {...value.autorizacion, comprobante: [comprobante]};
};
