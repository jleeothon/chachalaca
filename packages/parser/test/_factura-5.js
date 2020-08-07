module.exports = {
	numeroAutorizacion: 'CLAVE ACCESO F5',
	fechaAutorizacion: new Date('2019-12-22T22:13:31.000Z'),
	comprobante: {
		factura: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON SOCIAL F5',
				nombreComercial: 'NOMBRE COMERCIAL F5',
				ruc: 'RUC-F5',
				estab: '476',
				ptoEmi: '023',
				secuencial: '000049819',
				dirMatriz: 'DIR MATRIZ F5'
			},
			infoFactura: {
				dirEstablecimiento: 'DIR ESTAB F5',
				tipoIdentificacionComprador: '05',
				razonSocialComprador: 'COMPRADOR 12345',
				identificacionComprador: '1708866346',
				totalSinImpuestos: 55.25,
				totalDescuento: 16.81,
				fechaEmision: new Date('2019-12-22T05:00:00.000Z'),
				totalConImpuestos: [
					{codigo: '2', codigoPorcentaje: '0', baseImponible: 16.8},
					{codigo: '2', codigoPorcentaje: '2', baseImponible: 38.45}
				],
				importeTotal: 59.86,
				moneda: 'DOLAR'
			}
		}
	}
};
