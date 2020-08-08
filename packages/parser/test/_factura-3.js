module.exports = {
	numeroAutorizacion: 'NUMERODEAUTORIZACIONDUMMY',
	fechaAutorizacion: new Date('2019-10-31T23:21:06.000Z'),
	comprobante: {
		factura: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON SOCIAL DUMMY 2',
				nombreComercial: 'NOMBRE COMERCIAL',
				ruc: 'RUC-FACTURA-3',
				estab: '001',
				ptoEmi: '011',
				secuencial: '000042579',
				dirMatriz: 'DIR MATRIZ DUMMY'
			},
			infoFactura: {
				dirEstablecimiento: 'DIR ESTAB FACTURA 3',
				tipoIdentificacionComprador: '04',
				razonSocialComprador: 'DIR RAZONS SOCIAL',
				identificacionComprador: '123456890',
				totalSinImpuestos: 205.81,
				totalDescuento: 197.58,
				fechaEmision: new Date('2019-10-31T05:00:00.000Z'),
				totalConImpuestos: [
					{codigo: '2', codigoPorcentaje: '2', baseImponible: 205.81}
				],
				importeTotal: 230.51,
				moneda: 'DOLAR',
				pagos: [
					{formaPago: '20', total: 230.51, plazo: 0, unidadTiempo: 'dias'}
				]
			}
		}
	}
};
