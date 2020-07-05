module.exports = {
	numeroAutorizacion: 'numero-autorizacion-comprobante-1',
	fechaAutorizacion: '2019-12-20T12:05:15-05:00',
	comprobante: {
		factura: undefined,
		notaCredito: undefined,
		comprobanteRetencion: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON SOCIAL COMPROBANTE 1',
				nombreComercial: 'RAZON SOCIAL COMPROBANTE 1',
				ruc: 'ruc-comprobante-1',
				estab: '001',
				ptoEmi: '002',
				secuencial: '00000123',
				dirMatriz: 'Direccion Comprobante 1'
			},
			infoCompRetencion: {
				fechaEmision: '18/12/2019',
				dirEstablecimiento: 'Direccion Comprobante 1',
				obligadoContabilidad: 'SI',
				tipoIdentificacionSujetoRetenido: '04',
				razonSocialSujetoRetenido: 'RAZON SOCIAL SUJETO RETENIDO 1',
				identificacionSujetoRetenido:
					'IDENTIFICACION SUJETO RETENIDO COMPROBANTE 1',
				periodoFiscal: '12/2019'
			},
			impuestos: [
				{
					baseImponible: 118.5,
					codDocSustento: '01',
					codigo: '1',
					codigoRetencion: '312',
					fechaEmisionDocSustento: '18/12/2019',
					numDocSustento: 'NUM DOC SUSTENTO COMPROBANTE 1',
					porcentajeRetener: 1,
					valorRetenido: 1.19
				},
				{
					baseImponible: 14.22,
					codDocSustento: '01',
					codigo: '2',
					codigoRetencion: '1',
					fechaEmisionDocSustento: '18/12/2019',
					numDocSustento: 'NUM DOC SUSTENTO COMPROBANTE 1',
					porcentajeRetener: 30,
					valorRetenido: 4.27
				}
			]
		}
	}
};
