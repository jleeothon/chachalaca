module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['2412201901RUC-F720010020000002621234567814'],
	fechaAutorizacion: ['2019-12-24T19:14:04-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			factura: {
				$: {id: 'comprobante', version: '1.1.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL F7'],
						ruc: ['RUC-F7'],
						claveAcceso: ['2412201901RUC-F720010020000002621234567814'],
						codDoc: ['01'],
						estab: ['001'],
						ptoEmi: ['002'],
						secuencial: ['000000262'],
						dirMatriz: ['DIR ESTAB F7']
					}
				],
				infoFactura: [
					{
						fechaEmision: ['24/12/2019'],
						dirEstablecimiento: ['DIR ESTAB F7'],
						contribuyenteEspecial: ['0000'],
						obligadoContabilidad: ['SI'],
						tipoIdentificacionComprador: ['04'],
						razonSocialComprador: ['RAZON SOCIAL 3678'],
						identificacionComprador: ['1708866346001'],
						totalSinImpuestos: ['887.85'],
						totalDescuento: ['98.65'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										descuentoAdicional: ['0.00'],
										baseImponible: ['887.85'],
										valor: ['106.54']
									}
								]
							}
						],
						propina: ['0.00'],
						importeTotal: ['994.39'],
						pagos: [
							{
								pago: [
									{
										formaPago: ['01'],
										total: ['994.39'],
										plazo: ['0'],
										unidadTiempo: ['DIAS']
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
								codigoPrincipal: ['LB16M110'],
								descripcion: [
									'LLANTAS 16X2.125 M110 (F110) LINEA ROJA FORTUNE'
								],
								cantidad: ['50.000000'],
								precioUnitario: ['3.120000'],
								descuento: ['15.60'],
								precioTotalSinImpuesto: ['140.40'],
								detallesAdicionales: [
									{
										detAdicional: [
											{
												$: {
													nombre: 'Detalle Adicional 3',
													valor: 'A101FA12000000262001'
												}
											}
										]
									}
								],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['140.40'],
												valor: ['16.85']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['CODIGOPRINCIPAL'],
								descripcion: [
									'PCS. LLANTAS 16X2.10 PANTANERA M413 (F200) NEGRA'
								],
								cantidad: ['50.000000'],
								precioUnitario: ['2.590000'],
								descuento: ['12.95'],
								precioTotalSinImpuesto: ['116.55'],
								detallesAdicionales: [
									{
										detAdicional: [
											{
												$: {
													nombre: 'Detalle Adicional 3',
													valor: 'A101FA12000000262002'
												}
											}
										]
									}
								],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['116.55'],
												valor: ['13.99']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['LB20M107R'],
								descripcion: ['PCS. LLANTAS 20x2,125 M107 (F107) LINEA ROJA'],
								cantidad: ['50.000000'],
								precioUnitario: ['3.650000'],
								descuento: ['18.25'],
								precioTotalSinImpuesto: ['164.25'],
								detallesAdicionales: [
									{
										detAdicional: [
											{
												$: {
													nombre: 'Detalle Adicional 3',
													valor: 'A101FA12000000262003'
												}
											}
										]
									}
								],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['164.25'],
												valor: ['19.71']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['LB20M119M'],
								descripcion: [
									'PCS. LLANTAS 20X2.125 M119A (F119A) MOTOCROSS BLAN'
								],
								cantidad: ['50.000000'],
								precioUnitario: ['4.570000'],
								descuento: ['22.85'],
								precioTotalSinImpuesto: ['205.65'],
								detallesAdicionales: [
									{
										detAdicional: [
											{
												$: {
													nombre: 'Detalle Adicional 3',
													valor: 'A101FA12000000262004'
												}
											}
										]
									}
								],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['205.65'],
												valor: ['24.68']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['LB26M119M'],
								descripcion: [
									'PCS. LLANTAS 26X2.10 M119 (F119) ORBIT MOTOCROSS'
								],
								cantidad: ['50.000000'],
								precioUnitario: ['5.800000'],
								descuento: ['29.00'],
								precioTotalSinImpuesto: ['261.00'],
								detallesAdicionales: [
									{
										detAdicional: [
											{
												$: {
													nombre: 'Detalle Adicional 3',
													valor: 'A101FA12000000262005'
												}
											}
										]
									}
								],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['261.00'],
												valor: ['31.32']
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
							{_: 'mlamilla@oselda.ec', $: {nombre: 'emailCliente'}},
							{
								_: 'AV. QUITO 4018 E/ EL ORO Y MARACAIBO',
								$: {nombre: 'Dirección:'}
							},
							{_: 'Contado', $: {nombre: 'Forma de Pago:'}},
							{_: '14', $: {nombre: 'O/C:'}},
							{_: 'MARIELA LAMILLA', $: {nombre: 'Vendedor:'}},
							{_: 'GUAYAQUIL', $: {nombre: 'Ciudad:'}},
							{_: '2-443171', $: {nombre: 'Teléfono(s):'}}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
