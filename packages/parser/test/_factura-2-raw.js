module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['numero-autorizacion-factura-2'],
	fechaAutorizacion: ['2018-09-24T09:28:50-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			factura: {
				$: {id: 'comprobante', version: '1.1.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL DUMMY 2'],
						nombreComercial: ['DIRECCION DUMMY 2'],
						ruc: ['1790710319001'],
						claveAcceso: ['clave-acceso-factura-2'],
						codDoc: ['01'],
						estab: ['068'],
						ptoEmi: ['017'],
						secuencial: ['000325207'],
						dirMatriz: ['DIR MATRIZ DUMMY']
					}
				],
				infoFactura: [
					{
						fechaEmision: ['24/09/2018'],
						dirEstablecimiento: ['DIR ESTABLECIMIENTO DUMMY'],
						contribuyenteEspecial: ['9999'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionComprador: ['05'],
						razonSocialComprador: ['RAZON SOCIAL COMPRADOR DUMMY'],
						identificacionComprador: ['88888888'],
						totalSinImpuestos: ['65.08'],
						totalDescuento: ['0'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['0'],
										baseImponible: ['0.00'],
										tarifa: ['0'],
										valor: ['0.00']
									},
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										baseImponible: ['65.08'],
										tarifa: ['12'],
										valor: ['7.81']
									}
								]
							}
						],
						propina: ['0.00'],
						importeTotal: ['72.89'],
						moneda: ['DOLAR'],
						pagos: [{pago: [{formaPago: ['01'], total: ['72.89']}]}]
					}
				],
				detalles: [
					{
						detalle: [
							{
								codigoPrincipal: ['161310'],
								descripcion: ['DESCRIPCION 1'],
								cantidad: ['1'],
								precioUnitario: ['15.54'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['15.54'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['15.54'],
												valor: ['1.86']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['169560'],
								descripcion: ['DESCRIPCION 2'],
								cantidad: ['1'],
								precioUnitario: ['19.14'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['19.14'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['19.14'],
												valor: ['2.30']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['241265'],
								descripcion: ['DESCRIPCION 3'],
								cantidad: ['1'],
								precioUnitario: ['1.26'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['1.26'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['1.26'],
												valor: ['0.15']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['40409'],
								descripcion: ['DESCRIPCION 4'],
								cantidad: ['1'],
								precioUnitario: ['3.78'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['3.78'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['3.78'],
												valor: ['0.45']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['7289'],
								descripcion: ['DESCRIPCION 5'],
								cantidad: ['1'],
								precioUnitario: ['2.11'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['2.11'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['2.11'],
												valor: ['0.25']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['193704'],
								descripcion: ['DESCRIPCION 6'],
								cantidad: ['1'],
								precioUnitario: ['14.58'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['14.58'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['14.58'],
												valor: ['1.75']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['188565'],
								descripcion: ['DESCRIPCION 7'],
								cantidad: ['1'],
								precioUnitario: ['4.44'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['4.44'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['4.44'],
												valor: ['0.53']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['220964'],
								descripcion: ['DESCRIPCION 8'],
								cantidad: ['1'],
								precioUnitario: ['2'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['2'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['2.00'],
												valor: ['0.24']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['220970'],
								descripcion: ['DESCRIPCION 9'],
								cantidad: ['1'],
								precioUnitario: ['2.23'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['2.23'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['2.23'],
												valor: ['0.27']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['100146052'],
								descripcion: ['DESCRIPCION 10'],
								cantidad: ['8'],
								precioUnitario: ['0'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['0'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['0.00'],
												valor: ['0.00']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['100159353'],
								descripcion: ['DESCRIPCION 11'],
								cantidad: ['1'],
								precioUnitario: ['0'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['0'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['0'],
												tarifa: ['0'],
												baseImponible: ['0.00'],
												valor: ['0.00']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['100159263'],
								descripcion: ['DESCRIPCION 12'],
								cantidad: ['1'],
								precioUnitario: ['0'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['0'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['0'],
												tarifa: ['0'],
												baseImponible: ['0.00'],
												valor: ['0.00']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['100159262'],
								descripcion: ['DESCRIPCION 13'],
								cantidad: ['1'],
								precioUnitario: ['0'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['0'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['0'],
												tarifa: ['0'],
												baseImponible: ['0.00'],
												valor: ['0.00']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['100159253'],
								descripcion: ['DESCRIPCION 14'],
								cantidad: ['1'],
								precioUnitario: ['0'],
								descuento: ['0'],
								precioTotalSinImpuesto: ['0'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['0'],
												tarifa: ['0'],
												baseImponible: ['0.00'],
												valor: ['0.00']
											}
										]
									}
								]
							}
						]
					}
				],
				infoAdicional: [
					{
						campoAdicional: [
							{_: '3.37', $: {nombre: 'DESCUENTO'}},
							{_: '4.23', $: {nombre: 'DEDUCIBLE ALIMENTOS'}},
							{_: '1773801', $: {nombre: 'DOCUMENTO INTERNO'}}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
