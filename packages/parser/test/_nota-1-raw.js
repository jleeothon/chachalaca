module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['NUM-AUTORIZACION-NOTA-1'],
	fechaAutorizacion: ['2019-12-26T10:49:13-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			notaCredito: {
				$: {id: 'comprobante', version: '1.0.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL NOTA 1'],
						nombreComercial: ['RAZON SOCIAL NOTA 1'],
						ruc: ['RUC-NOTA-1'],
						claveAcceso: ['NUM-AUTORIZACION-NOTA-1'],
						codDoc: ['04'],
						estab: ['001'],
						ptoEmi: ['002'],
						secuencial: ['000001234'],
						dirMatriz: ['DIR MATRIZ NOTA 1']
					}
				],
				infoNotaCredito: [
					{
						fechaEmision: ['23/12/2019'],
						dirEstablecimiento: ['DIR MATRIZ NOTA 1'],
						tipoIdentificacionComprador: ['04'],
						razonSocialComprador: ['RAZON SOCIAL COMPRADOR 1'],
						identificacionComprador: ['IDENTIFICACION COMPRADOR 1'],
						contribuyenteEspecial: ['000'],
						obligadoContabilidad: ['SI'],
						codDocModificado: ['01'],
						numDocModificado: ['001-002-000002345'],
						fechaEmisionDocSustento: ['27/08/2019'],
						totalSinImpuestos: ['42.62'],
						valorModificacion: ['47.73'],
						moneda: ['DOLAR'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										baseImponible: ['42.62'],
										valor: ['5.11']
									}
								]
							}
						],
						motivo: ['DESCUENTO']
					}
				],
				detalles: [
					{
						detalle: [
							{
								codigoInterno: ['DESCUENTO'],
								codigoAdicional: ['DESCUENTO'],
								descripcion: ['DESCUENTO POR PRONTO PAGO'],
								cantidad: ['1'],
								precioUnitario: ['42.62'],
								precioTotalSinImpuesto: ['42.62'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['42.62'],
												valor: ['5.11']
											}
										]
									}
								]
							}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
