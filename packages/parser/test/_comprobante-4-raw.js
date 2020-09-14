module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['1108202007099004945900120010020042303354230335013'],
	fechaAutorizacion: ['2020-08-13T17:45:28-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			comprobanteRetencion: {
				$: {
					'xmlns:ns2': 'http://www.w3.org/2000/09/xmldsig#',
					id: 'comprobante',
					version: '2.0.0'
				},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['BANCO GUAYAQUIL S.A.'],
						nombreComercial: ['BANCO GUAYAQUIL S.A.'],
						ruc: ['0990049459001'],
						claveAcceso: ['1108202007099004945900120010020042303354230335013'],
						codDoc: ['07'],
						estab: ['001'],
						ptoEmi: ['002'],
						secuencial: ['004230335'],
						dirMatriz: ['PICHINCHA 105 - 107 Y FRANCISCO DE PAULA YCAZA']
					}
				],
				infoCompRetencion: [
					{
						fechaEmision: ['11/08/2020'],
						dirEstablecimiento: [
							'PICHINCHA 105 - 107 Y FRANCISCO DE PAULA YCAZA'
						],
						contribuyenteEspecial: ['6925'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionSujetoRetenido: ['04'],
						parteRel: ['NO'],
						razonSocialSujetoRetenido: ['RAZON SOCIAL COMPRADOR MEXLR35'],
						identificacionSujetoRetenido: ['IDENTIFICACION QBYOFK4'],
						periodoFiscal: ['08/2020']
					}
				],
				docsSustento: [
					{
						docSustento: [
							{
								codSustento: ['11'],
								codDocSustento: ['12'],
								numDocSustento: ['000000000000000'],
								fechaEmisionDocSustento: ['11/08/2020'],
								fechaRegistroContable: ['11/08/2020'],
								numAutDocSustento: [
									'0000000000000000000000000000000000000000000000000'
								],
								pagoLocExt: ['01'],
								totalSinImpuestos: ['619.00'],
								importeTotal: ['752.59'],
								impuestosDocSustento: [
									{
										impuestoDocSustento: [
											{
												codImpuestoDocSustento: ['2'],
												codigoPorcentaje: ['0000'],
												baseImponible: ['0.00'],
												tarifa: ['0.00'],
												valorImpuesto: ['0.00']
											}
										]
									}
								],
								retenciones: [
									{
										retencion: [
											{
												codigo: ['1'],
												codigoRetencion: ['344A'],
												baseImponible: ['619.00'],
												porcentajeRetener: ['2.00'],
												valorRetenido: ['12.38']
											},
											{
												codigo: ['2'],
												codigoRetencion: ['1'],
												baseImponible: ['80.63'],
												porcentajeRetener: ['30.00'],
												valorRetenido: ['24.19']
											}
										]
									}
								],
								pagos: [{pago: [{formaPago: ['20'], total: ['663.33']}]}]
							}
						]
					}
				],
				infoAdicional: ['']
			}
		}
	],
	mensajes: ['']
};
