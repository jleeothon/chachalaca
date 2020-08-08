module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['numero-autorizacion-factura-1'],
	fechaAutorizacion: ['2018-02-01T17:53:25-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			factura: {
				$: {id: 'comprobante', version: '1.1.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['EMPRESA X'],
						nombreComercial: ['EMPRESA X'],
						ruc: ['ruc-456'],
						claveAcceso: ['clave-acceso-factura-1'],
						codDoc: ['01'],
						estab: ['002'],
						ptoEmi: ['003'],
						secuencial: ['999999999'],
						dirMatriz: ['Av. Quito 1234']
					}
				],
				infoFactura: [
					{
						fechaEmision: ['01/02/2018'],
						dirEstablecimiento: ['Av. Quito 1234'],
						contribuyenteEspecial: ['111'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionComprador: ['04'],
						razonSocialComprador: ['EMPRESA ABC'],
						identificacionComprador: ['3948756'],
						direccionComprador: ['DIR COMPRADOR 1234'],
						totalSinImpuestos: ['19.34'],
						totalDescuento: ['10.40'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['3'],
										codigoPorcentaje: ['3092'],
										baseImponible: ['29.74'],
										tarifa: ['15'],
										valor: ['4.46']
									},
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										baseImponible: ['23.80'],
										tarifa: ['12.00'],
										valor: ['2.86']
									}
								]
							}
						],
						propina: ['0'],
						importeTotal: ['26.66'],
						moneda: ['DOLARES'],
						pagos: [
							{
								pago: [
									{
										formaPago: ['20'],
										total: ['26.66'],
										plazo: ['30'],
										unidadTiempo: ['dias']
									}
								]
							}
						]
					}
				],
				detalles: [
					{
						detalle: [
							{
								codigoPrincipal: ['27'],
								codigoAuxiliar: ['27'],
								descripcion: ['PRODUCTO XX'],
								cantidad: ['1'],
								precioUnitario: ['19.34'],
								descuento: ['0.00'],
								precioTotalSinImpuesto: ['19.34'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['3'],
												codigoPorcentaje: ['3092'],
												tarifa: ['15'],
												baseImponible: ['19.34'],
												valor: ['2.90']
											},
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['22.24'],
												valor: ['2.67']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['1010'],
								codigoAuxiliar: ['1010'],
								descripcion: ['RENTA DE EQUIPOS'],
								cantidad: ['1'],
								precioUnitario: ['10.40'],
								descuento: ['10.40'],
								precioTotalSinImpuesto: ['0.00'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['3'],
												codigoPorcentaje: ['3092'],
												tarifa: ['15'],
												baseImponible: ['10.40'],
												valor: ['1.56']
											},
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['1.56'],
												valor: ['0.19']
											}
										]
									}
								]
							}
						]
					}
				],
				infoAdicional: [
					{campoAdicional: [{_: '01/02/2018', $: {nombre: 'FechaPublicacion'}}]}
				]
			}
		}
	],
	mensajes: ['']
};
