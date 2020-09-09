module.exports = {
	numeroAutorizacion: 'NUMERO-AUTORIZACION-COMP-3',
	fechaAutorizacion: new Date('2020-08-04T05:12:25.000Z'),
	comprobante: {
		comprobanteRetencion: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON SOCIAL COMP 3',
				ruc: 'RUC-COMP-3',
				estab: '001',
				ptoEmi: '004',
				secuencial: '1234567',
				dirMatriz: 'DIR MATRIZ COMP 3'
			},
			infoCompRetencion: {
				fechaEmision: new Date('2020-08-03T05:00:00.000Z'),
				dirEstablecimiento: undefined,
				obligadoContabilidad: 'SI',
				tipoIdentificacionSujetoRetenido: '04',
				razonSocialSujetoRetenido: 'RAZON SOCIAL SUJETO RETENIDO COMP 3',
				identificacionSujetoRetenido: 'RUC IDENT SUJETO RETENIDO COMP 3',
				periodoFiscal: '08/2020'
			},
			impuestos: [
				{
					codigo: '2',
					codigoRetencion: '1',
					baseImponible: 55.31,
					porcentajeRetener: 30,
					valorRetenido: 16.59,
					codDocSustento: '22',
					numDocSustento: '011220000123456',
					fechaEmisionDocSustento: new Date('2020-08-03T05:00:00.000Z')
				},
				{
					codigo: '1',
					codigoRetencion: '344A',
					baseImponible: 460.94,
					porcentajeRetener: 2,
					valorRetenido: 9.22,
					codDocSustento: '22',
					numDocSustento: '011220000123456',
					fechaEmisionDocSustento: new Date('2020-08-03T05:00:00.000Z')
				}
			]
		}
	}
};
