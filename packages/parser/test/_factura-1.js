module.exports = {
	numeroAutorizacion: 'numero-autorizacion-factura-1',
	fechaAutorizacion: '2018-02-01T17:53:25-05:00',
	comprobante: {
		comprobanteRetencion: undefined,
		notaCredito: undefined,
		factura: {
			infoTributaria: {
				dirMatriz: 'Av. Quito 1234',
				estab: '002',
				nombreComercial: 'EMPRESA X',
				ptoEmi: '003',
				razonSocial: 'EMPRESA X',
				ruc: '12345678910',
				secuencial: '999999999',
				tipoEmision: '1'
			},
			infoFactura: {
				dirEstablecimiento: 'Av. Quito 1234',
				fechaEmision: '01/02/2018',
				identificacionComprador: '3948756',
				razonSocialComprador: 'EMPRESA ABC',
				tipoIdentificacionComprador: '04',
				totalDescuento: 10.4,
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
				totalSinImpuestos: 19.34
			}
		}
	}
};
