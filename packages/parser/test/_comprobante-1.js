module.exports = {
	numeroAutorizacion: 'numero-autorizacion-comprobante-1',
	fechaAutorizacion: new Date('2019-12-20T17:05:15.000Z'),
	comprobante: {
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
				fechaEmision: new Date('2019-12-18T05:00:00.000Z'),
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
					codigo: '1',
					codigoRetencion: '312',
					baseImponible: 118.5,
					porcentajeRetener: 1,
					valorRetenido: 1.19,
					codDocSustento: '01',
					numDocSustento: 'NUM DOC SUSTENTO COMPROBANTE 1',
					fechaEmisionDocSustento: new Date('2019-12-18T05:00:00.000Z')
				},
				{
					codigo: '2',
					codigoRetencion: '1',
					baseImponible: 14.22,
					porcentajeRetener: 30,
					valorRetenido: 4.27,
					codDocSustento: '01',
					numDocSustento: 'NUM DOC SUSTENTO COMPROBANTE 1',
					fechaEmisionDocSustento: new Date('2019-12-18T05:00:00.000Z')
				}
			]
		}
	}
};
