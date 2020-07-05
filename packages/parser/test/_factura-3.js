module.exports = {
	comprobante: {
		comprobanteRetencion: undefined,
		notaCredito: undefined,
		factura: {
			infoFactura: {
				dirEstablecimiento: 'DIR ESTAB FACTURA 3',
				fechaEmision: '31/10/2019',
				identificacionComprador: '123456890',
				razonSocialComprador: 'DIR RAZONS SOCIAL',
				tipoIdentificacionComprador: '04',
				totalConImpuestos: [
					{
						baseImponible: 205.81,
						codigo: '2',
						codigoPorcentaje: '2',
						tarifa: Number.NaN,
						valor: 24.7
					}
				],
				totalDescuento: 197.58,
				totalSinImpuestos: 205.81
			},
			infoTributaria: {
				dirMatriz: 'DIR MATRIZ DUMMY',
				estab: '001',
				nombreComercial: 'NOMBRE COMERCIAL',
				ptoEmi: '011',
				razonSocial: 'RAZON SOCIAL DUMMY 2',
				ruc: 'RUC-FACTURA-3',
				secuencial: '000042579',
				tipoEmision: '1'
			}
		}
	},
	fechaAutorizacion: '2019-10-31T18:21:06-05:00',
	numeroAutorizacion: 'NUMERODEAUTORIZACIONDUMMY'
};
