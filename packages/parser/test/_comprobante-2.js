module.exports = {
	numeroAutorizacion: 'CLAVE-DE-ACCESO',
	fechaAutorizacion: new Date('2020-02-29T09:17:27.000Z'),
	comprobante: {
		comprobanteRetencion: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON SOCIAL C2',
				nombreComercial: 'RAZON SOCIAL C2',
				ruc: 'ruc-123',
				estab: '002',
				ptoEmi: '011',
				secuencial: '000190334',
				dirMatriz: 'dir matriz c2'
			},
			infoCompRetencion: {
				fechaEmision: new Date('2020-02-28T05:00:00.000Z'),
				dirEstablecimiento: 'DIR ESTAB C2',
				obligadoContabilidad: 'SI',
				tipoIdentificacionSujetoRetenido: '04',
				razonSocialSujetoRetenido: 'RAZON SOCIAL SR C2',
				identificacionSujetoRetenido: '0992856823001',
				periodoFiscal: '02/2020'
			},
			impuestos: [
				{
					codigo: '1',
					codigoRetencion: '323B1',
					baseImponible: 1.2,
					porcentajeRetener: 2,
					valorRetenido: 0.02,
					codDocSustento: '00'
				}
			]
		}
	}
};
