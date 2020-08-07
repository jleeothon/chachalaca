module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['CLAVE-DE-ACCESO'],
	fechaAutorizacion: ['2020-02-29T04:17:27-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			comprobanteRetencion: {
				$: {id: 'comprobante', version: '1.0.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL C2'],
						nombreComercial: ['RAZON SOCIAL C2'],
						ruc: ['ruc-123'],
						claveAcceso: ['CLAVE-DE-ACCESO'],
						codDoc: ['07'],
						estab: ['002'],
						ptoEmi: ['011'],
						secuencial: ['000190334'],
						dirMatriz: ['dir matriz c2']
					}
				],
				infoCompRetencion: [
					{
						fechaEmision: ['28/02/2020'],
						dirEstablecimiento: ['DIR ESTAB C2'],
						contribuyenteEspecial: ['5368'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionSujetoRetenido: ['04'],
						razonSocialSujetoRetenido: ['RAZON SOCIAL SR C2'],
						identificacionSujetoRetenido: ['0992856823001'],
						periodoFiscal: ['02/2020']
					}
				],
				impuestos: [
					{
						impuesto: [
							{
								codigo: ['1'],
								codigoRetencion: ['323B1'],
								baseImponible: ['1.2000'],
								porcentajeRetener: ['2.00'],
								valorRetenido: ['0.0200'],
								codDocSustento: ['00']
							}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
