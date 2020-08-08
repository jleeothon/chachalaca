'use strict';

const {parseRaw} = require('./lib/parse-raw');
const {processAutorizacion} = require('./lib/process-autorizacion');

module.exports = async function (content) {
	const rawAutorizacion = await parseRaw(content);
	const autorizacion = processAutorizacion(rawAutorizacion);
	return autorizacion;
};
