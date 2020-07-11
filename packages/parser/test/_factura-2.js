module.exports = {
	numeroAutorizacion: 'numero-autorizacion-factura-2',
	fechaAutorizacion: '2018-09-24T09:28:50-05:00',
	comprobante: {
		comprobanteRetencion: undefined,
		notaCredito: undefined,
		factura: {
			infoTributaria: {
				dirMatriz: 'DIR MATRIZ DUMMY',
				estab: '068',
				nombreComercial: 'DIRECCION DUMMY 2',
				ptoEmi: '017',
				razonSocial: 'RAZON SOCIAL DUMMY 2',
				ruc: '1790710319001',
				secuencial: '000325207',
				tipoEmision: '1'
			},
			infoFactura: {
				dirEstablecimiento: 'DIR ESTABLECIMIENTO DUMMY',
				fechaEmision: '24/09/2018',
				identificacionComprador: '88888888',
				razonSocialComprador: 'RAZON SOCIAL COMPRADOR DUMMY',
				tipoIdentificacionComprador: '05',
				totalDescuento: 0,
				totalConImpuestos: [
					{
						baseImponible: 0,
						codigo: '2',
						codigoPorcentaje: '0',
						tarifa: 0,
						valor: 0
					},
					{
						baseImponible: 65.08,
						codigo: '2',
						codigoPorcentaje: '2',
						tarifa: 12,
						valor: 7.81
					}
				],
				totalSinImpuestos: 65.08
			}
		}
	}
};
