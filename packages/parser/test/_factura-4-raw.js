module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['CLAVE ACCESO F4'],
	fechaAutorizacion: ['2019-12-04T21:10:28-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			factura: {
				$: {id: 'comprobante', version: '1.1.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON-SOCIAL-4'],
						ruc: ['0990110662001'],
						claveAcceso: ['CLAVE ACCESO F4'],
						codDoc: ['01'],
						estab: ['001'],
						ptoEmi: ['100'],
						secuencial: ['000051802'],
						dirMatriz: ['DIR MATRIZ F4']
					}
				],
				infoFactura: [
					{
						fechaEmision: ['04/12/2019'],
						contribuyenteEspecial: ['5505'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionComprador: ['05'],
						razonSocialComprador: ['COMPRADOR 12345'],
						identificacionComprador: ['1708866346'],
						direccionComprador: ['DIRECCOIN COMPRADOR F4'],
						totalSinImpuestos: ['561.32'],
						totalDescuento: ['18.68'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['0'],
										baseImponible: ['561.32'],
										tarifa: ['0'],
										valor: ['0.00']
									}
								]
							}
						],
						propina: ['0.00'],
						importeTotal: ['561.32'],
						moneda: ['DOLAR'],
						pagos: [{pago: [{formaPago: ['20'], total: ['561.32']}]}]
					}
				]
			}
		}
	],
	mensajes: ['']
};
