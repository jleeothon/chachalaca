module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['CLAVE ACCESO F5'],
	fechaAutorizacion: ['2019-12-22T17:13:31-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			factura: {
				$: {version: '1.1.0', id: 'comprobante'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL F5'],
						nombreComercial: ['NOMBRE COMERCIAL F5'],
						ruc: ['RUC-F5'],
						claveAcceso: ['CLAVE ACCESO F5'],
						codDoc: ['01'],
						estab: ['476'],
						ptoEmi: ['023'],
						secuencial: ['000049819'],
						dirMatriz: ['DIR MATRIZ F5']
					}
				],
				infoFactura: [
					{
						fechaEmision: ['22/12/2019'],
						dirEstablecimiento: ['DIR ESTAB F5'],
						contribuyenteEspecial: ['6925'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionComprador: ['05'],
						razonSocialComprador: ['COMPRADOR 12345'],
						identificacionComprador: ['1708866346'],
						totalSinImpuestos: ['55.25'],
						totalDescuento: ['16.81'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['0'],
										baseImponible: ['16.80'],
										valor: ['0.00']
									},
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										baseImponible: ['38.45'],
										valor: ['4.61']
									}
								]
							}
						],
						propina: ['0.00'],
						importeTotal: ['59.86'],
						moneda: ['DOLAR']
					}
				]
			}
		}
	],
	mensajes: ['']
};
