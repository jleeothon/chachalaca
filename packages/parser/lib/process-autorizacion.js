'use strict';

const {get} = require('dot-prop');
const parseShortDate = require('./parse-date');

function filterObjectEntries(object, f) {
	// By default, filter objects with undefined values
	const filter = f || (([, v]) => typeof v !== 'undefined');
	const entries = Object.entries(object).filter((pair) => filter(pair));
	return Object.fromEntries(entries);
}

function getInfoTributaria(raw) {
	const infoTributaria = raw.infoTributaria[0];
	// `raw` must be comprobanteRetencion or factura or notaCredito
	const tipoEmision = get(infoTributaria, 'tipoEmision.0');
	const razonSocial = get(infoTributaria, 'razonSocial.0');
	const nombreComercial = get(infoTributaria, 'nombreComercial.0');
	const ruc = get(infoTributaria, 'ruc.0');
	const estab = get(infoTributaria, 'estab.0');
	const ptoEmi = get(infoTributaria, 'ptoEmi.0');
	const secuencial = get(infoTributaria, 'secuencial.0');
	const dirMatriz = get(infoTributaria, 'dirMatriz.0');

	return filterObjectEntries({
		tipoEmision,
		razonSocial,
		nombreComercial,
		ruc,
		estab,
		ptoEmi,
		secuencial,
		dirMatriz
	});
}

function processComprobanteRetencion(raw) {
	const icr = raw.infoCompRetencion[0];
	const fechaEmision = parseShortDate(icr.fechaEmision[0]);
	const dirEstablecimiento = icr.dirEstablecimiento?.[0];
	const obligadoContabilidad = icr.obligadoContabilidad[0];
	const tipoIdentificacionSujetoRetenido =
		icr.tipoIdentificacionSujetoRetenido[0];
	const razonSocialSujetoRetenido = icr.razonSocialSujetoRetenido[0];
	const identificacionSujetoRetenido = icr.identificacionSujetoRetenido[0];
	const periodoFiscal = icr.periodoFiscal[0];

	const infoCompRetencion = {
		fechaEmision,
		dirEstablecimiento,
		obligadoContabilidad,
		tipoIdentificacionSujetoRetenido,
		razonSocialSujetoRetenido,
		identificacionSujetoRetenido,
		periodoFiscal
	};

	const rawImpuestos = raw.impuestos[0].impuesto;
	const impuestos = rawImpuestos.map((impuesto) =>
		filterObjectEntries({
			codigo: impuesto.codigo[0],
			codigoRetencion: impuesto.codigoRetencion[0],
			baseImponible: Number.parseFloat(impuesto.baseImponible[0]),
			porcentajeRetener: Number.parseFloat(impuesto.porcentajeRetener[0]),
			valorRetenido: Number.parseFloat(impuesto.valorRetenido[0]),
			codDocSustento: get(impuesto, 'codDocSustento.0'),
			numDocSustento: get(impuesto, 'numDocSustento.0'),
			fechaEmisionDocSustento:
				impuesto.fechaEmisionDocSustento &&
				parseShortDate(impuesto.fechaEmisionDocSustento[0])
		})
	);

	const infoTributaria = getInfoTributaria(raw);

	return {infoTributaria, infoCompRetencion, impuestos};
}

function getInfoFactura(raw) {
	const if0 = raw.infoFactura[0];

	const dirEstablecimiento = get(if0, 'dirEstablecimiento.0');
	const tipoIdentificacionComprador = get(if0, 'tipoIdentificacionComprador.0');
	const razonSocialComprador = get(if0, 'razonSocialComprador.0');
	const identificacionComprador = get(if0, 'identificacionComprador.0');

	const totalSinImpuestos = Number.parseFloat(if0.totalSinImpuestos[0]);
	const totalDescuento = Number.parseFloat(if0.totalDescuento[0]);

	const fechaEmision = parseShortDate(if0.fechaEmision[0]);
	const totalConImpuestosRaw = if0.totalConImpuestos[0].totalImpuesto;
	const totalConImpuestos = totalConImpuestosRaw.map((totalImpuesto) => {
		return filterObjectEntries({
			codigo: totalImpuesto.codigo[0],
			codigoPorcentaje: totalImpuesto.codigoPorcentaje[0],
			baseImponible: Number.parseFloat(totalImpuesto.baseImponible[0]),
			tarifa:
				totalImpuesto.tarifa && Number.parseFloat(totalImpuesto.tarifa[0]),
			valor: totalImpuesto.tarifa && Number.parseFloat(totalImpuesto.valor[0])
		});
	});

	const moneda = if0.moneda && if0.moneda[0];

	const importeTotal = Number.parseFloat(if0.importeTotal[0]);
	const pagos =
		if0.pagos &&
		if0.pagos[0].pago.map((pago) =>
			filterObjectEntries({
				formaPago: pago.formaPago[0],
				total: Number.parseFloat(pago.total[0]),
				plazo: pago.plazo && Number.parseFloat(pago.plazo[0]),
				unidadTiempo: pago.unidadTiempo && pago.unidadTiempo[0]
			})
		);

	return filterObjectEntries({
		dirEstablecimiento,
		tipoIdentificacionComprador,
		razonSocialComprador,
		identificacionComprador,
		totalSinImpuestos,
		totalDescuento,
		fechaEmision,
		totalConImpuestos,
		importeTotal,
		moneda,
		pagos
	});
}

function processFactura(raw) {
	const infoTributaria = getInfoTributaria(raw);
	const infoFactura = getInfoFactura(raw);
	return {infoTributaria, infoFactura};
}

function getInfoNotaCredito(raw) {
	const inc = raw.infoNotaCredito[0];
	const fechaEmision = parseShortDate(inc.fechaEmision[0]);
	const dirEstablecimiento = inc.dirEstablecimiento[0];
	const tipoIdentificacionComprador = inc.tipoIdentificacionComprador[0];
	const razonSocialComprador = inc.razonSocialComprador[0];
	const identificacionComprador = inc.identificacionComprador[0];

	const contribuyenteEspecial = inc.contribuyenteEspecial[0];
	const obligadoContabilidad = inc.obligadoContabilidad[0];

	const codDocModificado = inc.codDocModificado[0];
	const numberDocModificado = inc.numDocModificado[0];
	const fechaEmisionDocSustento = parseShortDate(
		inc.fechaEmisionDocSustento[0]
	);
	const totalSinImpuestos = Number.parseFloat(inc.totalSinImpuestos[0]);
	const valorModificacion = Number.parseFloat(inc.valorModificacion[0]);
	const moneda = inc.moneda[0];

	const totalImpuestoArray = inc.totalConImpuestos[0].totalImpuesto;
	const totalConImpuestos = totalImpuestoArray.map((ti) =>
		filterObjectEntries({
			codigo: ti.codigo[0],
			codigoPorcentaje: ti.codigoPorcentaje[0],
			baseImponible: Number.parseFloat(ti.baseImponible[0]),
			valor: Number.parseFloat(ti.valor[0])
		})
	);

	return {
		fechaEmision,
		dirEstablecimiento,
		tipoIdentificacionComprador,
		razonSocialComprador,
		identificacionComprador,
		contribuyenteEspecial,
		obligadoContabilidad,
		codDocModificado,
		numDocModificado: numberDocModificado,
		fechaEmisionDocSustento,
		totalSinImpuestos,
		valorModificacion,
		moneda,
		totalConImpuestos
	};
}

function processNotaCredito(raw) {
	const infoTributaria = getInfoTributaria(raw);
	const infoNotaCredito = getInfoNotaCredito(raw);
	return {infoTributaria, infoNotaCredito};
}

module.exports.processAutorizacion = function (rawAutorizacion) {
	const comprobante = rawAutorizacion.comprobante[0];
	const comprobanteToProcessor = [
		['comprobanteRetencion', processComprobanteRetencion],
		['factura', processFactura],
		['notaCredito', processNotaCredito]
	];
	const comprobanteEntries = comprobanteToProcessor.map(([c, process]) =>
		comprobante[c] ? [c, process(comprobante[c])] : [c, undefined]
	);
	return {
		numeroAutorizacion: rawAutorizacion.numeroAutorizacion[0],
		fechaAutorizacion: new Date(rawAutorizacion.fechaAutorizacion[0]),
		comprobante: filterObjectEntries(Object.fromEntries(comprobanteEntries))
	};
};
