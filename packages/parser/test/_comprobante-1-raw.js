module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['numero-autorizacion-comprobante-1'],
	fechaAutorizacion: ['2019-12-20T12:05:15-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			comprobanteRetencion: {
				$: {id: 'comprobante', version: '1.0.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL COMPROBANTE 1'],
						nombreComercial: ['RAZON SOCIAL COMPROBANTE 1'],
						ruc: ['ruc-comprobante-1'],
						claveAcceso: ['numero-autorizacion-comprobante-1'],
						codDoc: ['07'],
						estab: ['001'],
						ptoEmi: ['002'],
						secuencial: ['00000123'],
						dirMatriz: ['Direccion Comprobante 1']
					}
				],
				infoCompRetencion: [
					{
						fechaEmision: ['18/12/2019'],
						dirEstablecimiento: ['Direccion Comprobante 1'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionSujetoRetenido: ['04'],
						razonSocialSujetoRetenido: ['RAZON SOCIAL SUJETO RETENIDO 1'],
						identificacionSujetoRetenido: [
							'IDENTIFICACION SUJETO RETENIDO COMPROBANTE 1'
						],
						periodoFiscal: ['12/2019']
					}
				],
				impuestos: [
					{
						impuesto: [
							{
								codigo: ['1'],
								codigoRetencion: ['312'],
								baseImponible: ['118.50'],
								porcentajeRetener: ['1.00'],
								valorRetenido: ['1.19'],
								codDocSustento: ['01'],
								numDocSustento: ['NUM DOC SUSTENTO COMPROBANTE 1'],
								fechaEmisionDocSustento: ['18/12/2019']
							},
							{
								codigo: ['2'],
								codigoRetencion: ['1'],
								baseImponible: ['14.22'],
								porcentajeRetener: ['30.00'],
								valorRetenido: ['4.27'],
								codDocSustento: ['01'],
								numDocSustento: ['NUM DOC SUSTENTO COMPROBANTE 1'],
								fechaEmisionDocSustento: ['18/12/2019']
							}
						]
					}
				],
				infoAdicional: [
					{
						campoAdicional: [
							{_: 'Direccion Comprobante 1 - 2', $: {nombre: 'Direccion'}},
							{_: '9999999999-', $: {nombre: 'Telefono'}}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
