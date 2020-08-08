module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['CLAVE-DE-ACCESO'],
	fechaAutorizacion: ['2019-12-19T13:08:41-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			comprobanteRetencion: {
				$: {id: 'comprobante', version: '1.0.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON-SOCIAL-F6'],
						ruc: ['RUC-F6'],
						claveAcceso: ['CLAVE-DE-ACCESO'],
						codDoc: ['07'],
						estab: ['002'],
						ptoEmi: ['002'],
						secuencial: ['000003226'],
						dirMatriz: ['DIR MATRIZ F6']
					}
				],
				infoCompRetencion: [
					{
						fechaEmision: ['13/12/2019'],
						dirEstablecimiento: ['DIR MATRIZ F6'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionSujetoRetenido: ['04'],
						razonSocialSujetoRetenido: ['RAZON SOCIAL 7890'],
						identificacionSujetoRetenido: ['1708866346001'],
						periodoFiscal: ['12/2019']
					}
				],
				impuestos: [
					{
						impuesto: [
							{
								codigo: ['1'],
								codigoRetencion: ['312'],
								baseImponible: ['3.80'],
								porcentajeRetener: ['1.00'],
								valorRetenido: ['0.04'],
								codDocSustento: ['01'],
								numDocSustento: ['001001000011944'],
								fechaEmisionDocSustento: ['13/12/2019']
							}
						]
					}
				],
				infoAdicional: [
					{
						campoAdicional: [
							{
								_: 'DIRECCION - F6',
								$: {nombre: 'Direccion'}
							},
							{_: '04042NO', $: {nombre: 'Telefono'}},
							{_: '2444314', $: {nombre: 'CIATelefono'}},
							{_: 'Fte:312', $: {nombre: 'CodRetencion'}}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
