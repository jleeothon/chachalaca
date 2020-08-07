module.exports = {
	numeroAutorizacion: 'CLAVE-DE-ACCESO',
	fechaAutorizacion: new Date('2019-12-19T18:08:41.000Z'),
	comprobante: {
		comprobanteRetencion: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON-SOCIAL-F6',
				ruc: 'RUC-F6',
				estab: '002',
				ptoEmi: '002',
				secuencial: '000003226',
				dirMatriz: 'DIR MATRIZ F6'
			},
			infoCompRetencion: {
				fechaEmision: new Date('2019-12-13T05:00:00.000Z'),
				dirEstablecimiento: 'DIR MATRIZ F6',
				obligadoContabilidad: 'SI',
				tipoIdentificacionSujetoRetenido: '04',
				razonSocialSujetoRetenido: 'RAZON SOCIAL 7890',
				identificacionSujetoRetenido: '1708866346001',
				periodoFiscal: '12/2019'
			},
			impuestos: [
				{
					codigo: '1',
					codigoRetencion: '312',
					baseImponible: 3.8,
					porcentajeRetener: 1,
					valorRetenido: 0.04,
					codDocSustento: '01',
					numDocSustento: '001001000011944',
					fechaEmisionDocSustento: new Date('2019-12-13T05:00:00.000Z')
				}
			]
		}
	}
};
