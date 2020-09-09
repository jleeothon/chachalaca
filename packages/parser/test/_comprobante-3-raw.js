module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['NUMERO-AUTORIZACION-COMP-3'],
	fechaAutorizacion: ['2020-08-04T00:12:25-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			comprobanteRetencion: {
				$: {id: 'comprobante', version: '1.0.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL COMP 3'],
						ruc: ['RUC-COMP-3'],
						claveAcceso: ['NUMERO-AUTORIZACION-COMP-3'],
						codDoc: ['07'],
						estab: ['001'],
						ptoEmi: ['004'],
						secuencial: ['1234567'],
						dirMatriz: ['DIR MATRIZ COMP 3']
					}
				],
				infoCompRetencion: [
					{
						fechaEmision: ['03/08/2020'],
						contribuyenteEspecial: ['6925'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionSujetoRetenido: ['04'],
						razonSocialSujetoRetenido: ['RAZON SOCIAL SUJETO RETENIDO COMP 3'],
						identificacionSujetoRetenido: ['RUC IDENT SUJETO RETENIDO COMP 3'],
						periodoFiscal: ['08/2020']
					}
				],
				impuestos: [
					{
						impuesto: [
							{
								codigo: ['2'],
								codigoRetencion: ['1'],
								baseImponible: ['55.31'],
								porcentajeRetener: ['30.00'],
								valorRetenido: ['16.59'],
								codDocSustento: ['22'],
								numDocSustento: ['011220000123456'],
								fechaEmisionDocSustento: ['03/08/2020']
							},
							{
								codigo: ['1'],
								codigoRetencion: ['344A'],
								baseImponible: ['460.94'],
								porcentajeRetener: ['2.00'],
								valorRetenido: ['9.22'],
								codDocSustento: ['22'],
								numDocSustento: ['011220000123456'],
								fechaEmisionDocSustento: ['03/08/2020']
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
