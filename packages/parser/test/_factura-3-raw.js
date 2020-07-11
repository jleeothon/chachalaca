module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['NUMERODEAUTORIZACIONDUMMY'],
	fechaAutorizacion: ['2019-10-31T18:21:06-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			factura: {
				$: {id: 'comprobante', version: '1.0.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['RAZON SOCIAL DUMMY 2'],
						nombreComercial: ['NOMBRE COMERCIAL'],
						ruc: ['RUC-FACTURA-3'],
						claveAcceso: ['NUMERODEAUTORIZACIONDUMMY'],
						codDoc: ['01'],
						estab: ['001'],
						ptoEmi: ['011'],
						secuencial: ['000042579'],
						dirMatriz: ['DIR MATRIZ DUMMY']
					}
				],
				infoFactura: [
					{
						fechaEmision: ['31/10/2019'],
						dirEstablecimiento: ['DIR ESTAB FACTURA 3'],
						tipoIdentificacionComprador: ['04'],
						razonSocialComprador: ['DIR RAZONS SOCIAL'],
						identificacionComprador: ['123456890'],
						totalSinImpuestos: ['205.81'],
						totalDescuento: ['197.58'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										baseImponible: ['205.81'],
										valor: ['24.70']
									}
								]
							}
						],
						propina: ['0.00'],
						importeTotal: ['230.51'],
						moneda: ['DOLAR'],
						pagos: [
							{
								pago: [
									{
										formaPago: ['20'],
										total: ['230.51'],
										plazo: ['0'],
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
								codigoPrincipal: ['COD PRIN'],
								codigoAuxiliar: ['COD AUX'],
								descripcion: ['DESCRIPCION'],
								cantidad: ['2.090000'],
								precioUnitario: ['28.8000'],
								descuento: ['21.05'],
								precioTotalSinImpuesto: ['39.10'],
								detallesAdicionales: [
									{
										detAdicional: [
											{$: {nombre: 'MT2', valor: 'unidadMedida'}},
											{$: {nombre: '2', valor: 'cajas'}},
											{$: {nombre: '0', valor: 'unidades'}}
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
												baseImponible: ['39.10'],
												valor: ['4.69']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['COD PRIN'],
								codigoAuxiliar: ['COD AUX'],
								descripcion: ['DESCRIPCION'],
								cantidad: ['2.880000'],
								precioUnitario: ['70.0000'],
								descuento: ['141.12'],
								precioTotalSinImpuesto: ['60.48'],
								detallesAdicionales: [
									{
										detAdicional: [
											{$: {nombre: 'MT2', valor: 'unidadMedida'}},
											{$: {nombre: '2', valor: 'cajas'}},
											{$: {nombre: '0', valor: 'unidades'}}
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
												baseImponible: ['60.48'],
												valor: ['7.26']
											}
										]
									}
								]
							},
							{
								codigoPrincipal: ['COD PRIN'],
								codigoAuxiliar: ['COD AUX'],
								descripcion: ['DESCRIPCION'],
								cantidad: ['16.470000'],
								precioUnitario: ['8.6000'],
								descuento: ['35.41'],
								precioTotalSinImpuesto: ['106.23'],
								detallesAdicionales: [
									{
										detAdicional: [
											{$: {nombre: 'MT2', valor: 'unidadMedida'}},
											{$: {nombre: '9', valor: 'cajas'}},
											{$: {nombre: '0', valor: 'unidades'}}
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
												baseImponible: ['106.23'],
												valor: ['12.75']
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
							{_: 'CAMPO ADICIONAL DUMMY', $: {nombre: 'Direccion'}},
							{_: 'info@example.com', $: {nombre: 'Email'}}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
