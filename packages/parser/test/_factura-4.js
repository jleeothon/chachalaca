module.exports = {
	numeroAutorizacion: 'CLAVE ACCESO F4',
	fechaAutorizacion: new Date('2019-12-05T02:10:28.000Z'),
	comprobante: {
		factura: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON-SOCIAL-4',
				ruc: '0990110662001',
				estab: '001',
				ptoEmi: '100',
				secuencial: '000051802',
				dirMatriz: 'DIR MATRIZ F4'
			},
			infoFactura: {
				tipoIdentificacionComprador: '05',
				razonSocialComprador: 'COMPRADOR 12345',
				identificacionComprador: '1708866346',
				totalSinImpuestos: 561.32,
				totalDescuento: 18.68,
				fechaEmision: new Date('2019-12-04T05:00:00.000Z'),
				totalConImpuestos: [
					{
						codigo: '2',
						codigoPorcentaje: '0',
						baseImponible: 561.32,
						tarifa: 0,
						valor: 0
					}
				],
				importeTotal: 561.32,
				moneda: 'DOLAR',
				pagos: [{formaPago: '20', total: 561.32}]
			}
		}
	}
};
