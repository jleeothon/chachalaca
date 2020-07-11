'use strict';

const {get} = require('dot-prop');
const is = require('@sindresorhus/is');

function getInfoTributaria(raw) {
	// `raw` must be comprobanteRetencion or factura or notaCredito
	const infoTributariaKeys = [
		'tipoEmision',
		'razonSocial',
		'nombreComercial',
		'ruc',
		'estab',
		'ptoEmi',
		'secuencial',
		'dirMatriz'
	];
	const getEntry = (key) => {
		const path = `infoTributaria.0.${key}.0`;
		const value = get(raw, path);
		if (is.undefined(value)) {
			throw new TypeError(`Could not find ${path}`);
		}

		return [key, value];
	};

	const entries = infoTributariaKeys.map((k) => getEntry(k));
	return Object.fromEntries(entries);
}

function processComprobanteRetencion(raw) {
	const infoCompRetencionKeys = [
		'fechaEmision',
		'dirEstablecimiento',
		'obligadoContabilidad',
		'tipoIdentificacionSujetoRetenido',
		'razonSocialSujetoRetenido',
		'identificacionSujetoRetenido',
		'periodoFiscal'
	];
	const getterGen = (field) => (key) => [key, raw[field][0][key][0]];
	const icrGetter = getterGen('infoCompRetencion');
	const icrEntries = infoCompRetencionKeys.map((k) => icrGetter(k));
	const infoCompRetencion = Object.fromEntries(icrEntries);

	const impuestos = raw.impuestos[0].impuesto.map((impuesto) => {
		const get = (f) => impuesto[f][0];
		const getNumber = (f) => Number.parseFloat(get(f));
		return {
			codigo: get('codigo'),
			codigoRetencion: get('codigoRetencion'),
			baseImponible: getNumber('baseImponible'),
			porcentajeRetener: getNumber('porcentajeRetener'),
			valorRetenido: getNumber('valorRetenido'),
			codDocSustento: get('codDocSustento'),
			numDocSustento: get('numDocSustento'),
			fechaEmisionDocSustento: get('fechaEmisionDocSustento')
		};
	});

	const infoTributaria = getInfoTributaria(raw);

	return {infoTributaria, infoCompRetencion, impuestos};
}

function processFactura(raw) {
	const getString = (key) => {
		const path = `infoFactura.0.${key}.0`;
		const value = get(raw, path);
		if (is.undefined(value)) {
			throw new TypeError(`Could not find ${path}`);
		}

		return value;
	};

	const getNumber = (key) => Number.parseFloat(getString(key));
	const infoFacturaKeys = [
		['fechaEmision', getString],
		['dirEstablecimiento', getString],
		['tipoIdentificacionComprador', getString],
		['razonSocialComprador', getString],
		['identificacionComprador', getString],
		['totalSinImpuestos', getNumber],
		['totalDescuento', getNumber]
	];
	const infoFacturaEntries = infoFacturaKeys.map(([k, g]) => [k, g(k)]);
	const infoFactura = Object.fromEntries(infoFacturaEntries);

	const totalConImpuestosRaw =
		raw.infoFactura[0].totalConImpuestos[0].totalImpuesto;
	const totalConImpuestos = totalConImpuestosRaw.map((totalImpuesto) => {
		return {
			codigo: get(totalImpuesto, `codigo.0`),
			codigoPorcentaje: get(totalImpuesto, 'codigoPorcentaje.0'),
			baseImponible: Number.parseFloat(get(totalImpuesto, 'baseImponible.0')),
			tarifa: Number.parseFloat(get(totalImpuesto, 'tarifa.0')),
			valor: Number.parseFloat(get(totalImpuesto, 'valor.0'))
		};
	});

	infoFactura.totalConImpuestos = totalConImpuestos;

	const infoTributaria = getInfoTributaria(raw);

	return {infoTributaria, infoFactura};
}

function processNotaCredito(raw) {
	const infoTributaria = getInfoTributaria(raw);

	const infoNotaCredito = {
		fechaEmision: get(raw, 'infoNotaCredito.0.fechaEmision.0'),
		razonSocialComprador: get(raw, 'infoNotaCredito.0.razonSocialComprador.0'),
		identificacionComprador: get(raw, 'infoNotaCredito.0.identificacionComprador.0'),
		valorModificacion: Number.parseFloat(get(raw, 'infoNotaCredito.0.valorModificacion.0'))
	};

	const impuestos = get(raw, 'infoNotaCredito.0.totalConImpuestos.0.totalImpuesto');
	impuestos.totalIva = impuestos.find(
		(i) => i.codigo === '2' && i.codigoPorcentaje === '2'
	);
	impuestos.totalIce = impuestos.find((i) => i.codigo === '3');
	impuestos.impuesto0 = impuestos.find(
		(i) => i.codigo === '2' && i.codigoPorcentaje === '0'
	);

	return {infoTributaria, infoNotaCredito};
}

module.exports.processAutorizacion = function (rawAutorizacion) {
	const comprobante = rawAutorizacion.comprobante[0];
	const comprobanteToProcessor = [
		['comprobanteRetencion', processComprobanteRetencion],
		['factura', processFactura],
		['notaCredito', processNotaCredito]
	];
	const comprobanteEntries = comprobanteToProcessor.map(([c, processor]) =>
		comprobante[c] ? [c, processor(comprobante[c])] : [c, undefined]
	);
	return {
		numeroAutorizacion: rawAutorizacion.numeroAutorizacion[0],
		fechaAutorizacion: rawAutorizacion.fechaAutorizacion[0],
		comprobante: Object.fromEntries(comprobanteEntries)
	};
};
