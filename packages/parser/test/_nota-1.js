module.exports = {
	numeroAutorizacion: 'NUM-AUTORIZACION-NOTA-1',
	fechaAutorizacion: new Date('2019-12-26T15:49:13.000Z'),
	comprobante: {
		notaCredito: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON SOCIAL NOTA 1',
				nombreComercial: 'RAZON SOCIAL NOTA 1',
				ruc: 'RUC-NOTA-1',
				estab: '001',
				ptoEmi: '002',
				secuencial: '000001234',
				dirMatriz: 'DIR MATRIZ NOTA 1'
			},
			infoNotaCredito: {
				fechaEmision: new Date('2019-12-23T05:00:00.000Z'),
				dirEstablecimiento: 'DIR MATRIZ NOTA 1',
				tipoIdentificacionComprador: '04',
				razonSocialComprador: 'RAZON SOCIAL COMPRADOR 1',
				identificacionComprador: 'IDENTIFICACION COMPRADOR 1',
				contribuyenteEspecial: '000',
				obligadoContabilidad: 'SI',
				codDocModificado: '01',
				numDocModificado: '001-002-000002345',
				fechaEmisionDocSustento: new Date('2019-08-27T05:00:00.000Z'),
				totalSinImpuestos: 42.62,
				valorModificacion: 47.73,
				moneda: 'DOLAR',
				totalConImpuestos: [
					{
						codigo: '2',
						codigoPorcentaje: '2',
						baseImponible: 42.62,
						valor: 5.11
					}
				]
			}
		}
	}
};
