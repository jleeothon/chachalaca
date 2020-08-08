module.exports = {
	numeroAutorizacion: 'numero-autorizacion-factura-1',
	fechaAutorizacion: new Date('2018-02-01T22:53:25.000Z'),
	comprobante: {
		factura: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'EMPRESA X',
				nombreComercial: 'EMPRESA X',
				ruc: 'ruc-456',
				estab: '002',
				ptoEmi: '003',
				secuencial: '999999999',
				dirMatriz: 'Av. Quito 1234'
			},
			infoFactura: {
				dirEstablecimiento: 'Av. Quito 1234',
				tipoIdentificacionComprador: '04',
				razonSocialComprador: 'EMPRESA ABC',
				identificacionComprador: '3948756',
				totalSinImpuestos: 19.34,
				totalDescuento: 10.4,
				fechaEmision: new Date('2018-02-01T05:00:00.000Z'),
				totalConImpuestos: [
					{
						codigo: '3',
						codigoPorcentaje: '3092',
						baseImponible: 29.74,
						tarifa: 15,
						valor: 4.46
					},
					{
						codigo: '2',
						codigoPorcentaje: '2',
						baseImponible: 23.8,
						tarifa: 12,
						valor: 2.86
					}
				],
				importeTotal: 26.66,
				moneda: 'DOLARES',
				pagos: [
					{formaPago: '20', total: 26.66, plazo: 30, unidadTiempo: 'dias'}
				]
			}
		}
	}
};
