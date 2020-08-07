module.exports = {
	numeroAutorizacion: '2412201901RUC-F720010020000002621234567814',
	fechaAutorizacion: new Date('2019-12-25T00:14:04.000Z'),
	comprobante: {
		factura: {
			infoTributaria: {
				tipoEmision: '1',
				razonSocial: 'RAZON SOCIAL F7',
				ruc: 'RUC-F7',
				estab: '001',
				ptoEmi: '002',
				secuencial: '000000262',
				dirMatriz: 'DIR ESTAB F7'
			},
			infoFactura: {
				dirEstablecimiento: 'DIR ESTAB F7',
				tipoIdentificacionComprador: '04',
				razonSocialComprador: 'RAZON SOCIAL 3678',
				identificacionComprador: '1708866346001',
				totalSinImpuestos: 887.85,
				totalDescuento: 98.65,
				fechaEmision: new Date('2019-12-24T05:00:00.000Z'),
				totalConImpuestos: [
					{codigo: '2', codigoPorcentaje: '2', baseImponible: 887.85}
				],
				importeTotal: 994.39,
				pagos: [
					{formaPago: '01', total: 994.39, plazo: 0, unidadTiempo: 'DIAS'}
				]
			}
		}
	}
};
