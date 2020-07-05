'use strict';

const {getRawAutorizacion} = require('./lib/raw-parser');
const {processAutorizacion} = require('./lib/processors');

module.exports = async function (content) {
	const rawAutorizacion = await getRawAutorizacion(content);
	const autorizacion = processAutorizacion(rawAutorizacion);
	return autorizacion;
};
