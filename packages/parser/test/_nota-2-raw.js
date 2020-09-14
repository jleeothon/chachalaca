module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['NUMERO AUTORIZACION NOTA 2'],
	fechaAutorizacion: ['2020-08-24T15:41:31-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			notaCredito: {
				$: {id: 'comprobante', version: '1.1.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['NOTA 2 RAZON SOCIAL'],
						nombreComercial: ['NOTA 2 RAZON SOCIAL CIA LTDA'],
						ruc: ['1792012929001'],
						claveAcceso: ['NUMERO AUTORIZACION NOTA 2'],
						codDoc: ['04'],
						estab: ['001'],
						ptoEmi: ['003'],
						secuencial: ['000001567'],
						dirMatriz: ['DIR MATRIZ NOTA 2']
					}
				],
				infoNotaCredito: [
					{
						fechaEmision: ['24/08/2020'],
						dirEstablecimiento: ['DIR ESTABLECIMIENTO NOTA 2'],
						tipoIdentificacionComprador: ['04'],
						razonSocialComprador: ['RAZON SOCIAL COMPRADOR MEXLR35'],
						identificacionComprador: ['IDENTIFICACION QBYOFK4'],
						obligadoContabilidad: ['SI'],
						codDocModificado: ['01'],
						numDocModificado: ['001-003-000009128'],
						fechaEmisionDocSustento: ['18/08/2020'],
						totalSinImpuestos: ['6.87'],
						valorModificacion: ['7.69'],
						moneda: ['DOLAR'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										baseImponible: ['6.87'],
										valor: ['0.82']
									}
								]
							}
						],
						motivo: ['NCR 1567 F9128 18AGOST PIEZAS ROTAS IB 2247']
					}
				],
				detalles: [
					{
						detalle: [
							{
								codigoInterno: ['269321291'],
								descripcion: ['LISTELO TREVELEZ VINO TINTO'],
								cantidad: ['2.000000'],
								precioUnitario: ['1.070000'],
								descuento: ['0.32'],
								precioTotalSinImpuesto: ['1.82'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['1.82'],
												valor: ['0.22']
											}
										]
									}
								]
							},
							{
								codigoInterno: ['616091791'],
								descripcion: ['BASE DECORADA AGASAJO MULTICOLOR'],
								cantidad: ['1.000000'],
								precioUnitario: ['5.610000'],
								descuento: ['0.56'],
								precioTotalSinImpuesto: ['5.05'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12.00'],
												baseImponible: ['5.05'],
												valor: ['0.61']
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
							{_: 'AV.MACHALA Y AGUIRRE ESQUINA', $: {nombre: 'Direccion'}},
							{_: '042511422', $: {nombre: 'Telefono'}},
							{_: 'ventasbestservice@outlook.com', $: {nombre: 'Email'}},
							{
								_: 'RAZON SOCIAL COMPRADOR MEXLR35',
								$: {nombre: 'NombreComercial'}
							}
						]
					}
				],
				'ds:Signature': [
					{
						$: {
							'xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
							'xmlns:etsi': 'http://uri.etsi.org/01903/v1.3.2#',
							Id: 'Signature753129'
						},
						'ds:SignedInfo': [
							{
								$: {Id: 'Signature-SignedInfo216227'},
								'ds:CanonicalizationMethod': [
									{
										$: {
											Algorithm:
												'http://www.w3.org/TR/2001/REC-xml-c14n-20010315'
										}
									}
								],
								'ds:SignatureMethod': [
									{$: {Algorithm: 'http://www.w3.org/2000/09/xmldsig#rsa-sha1'}}
								],
								'ds:Reference': [
									{
										$: {
											Id: 'SignedPropertiesID237872',
											Type: 'http://uri.etsi.org/01903#SignedProperties',
											URI: '#Signature753129-SignedProperties760751'
										},
										'ds:DigestMethod': [
											{$: {Algorithm: 'http://www.w3.org/2000/09/xmldsig#sha1'}}
										],
										'ds:DigestValue': ['tZh5Cd1fbjJhwjIfASJaeqH+2xE=']
									},
									{
										$: {URI: '#Certificate1360658'},
										'ds:DigestMethod': [
											{$: {Algorithm: 'http://www.w3.org/2000/09/xmldsig#sha1'}}
										],
										'ds:DigestValue': ['UlAv94Od0BaiZbczIcY+hVyO+yM=']
									},
									{
										$: {Id: 'Reference-ID-27600', URI: '#comprobante'},
										'ds:Transforms': [
											{
												'ds:Transform': [
													{
														$: {
															Algorithm:
																'http://www.w3.org/2000/09/xmldsig#enveloped-signature'
														}
													}
												]
											}
										],
										'ds:DigestMethod': [
											{$: {Algorithm: 'http://www.w3.org/2000/09/xmldsig#sha1'}}
										],
										'ds:DigestValue': ['w7pQU263nJnzvFm1oU1yoGMoIWk=']
									}
								]
							}
						],
						'ds:SignatureValue': [
							{
								_:
									'EOAN2JWNYjxQitQhW0Y6WXmFUk4X9E5p17+BZeIvpYMAI3mWepuO9WCMhW42hfPVVOM0rpfJS09U\r\ndJaE0V328SfLteh41pEh7ivEs2uZfJq5so8WbPyYCwm33WgA2b3bhQtfxdoVslWYt+C2BNtzfns4\r\nekQYwSuKcp30ijn4bUnMAILeouRJJjnhNtHXDzBZkGyeU6sXjmHr1cX8KL5paHGYfCl23iDKZD98\r\nOmMCt0K56SyfjAXx7NSwFRy6RH81E5n9m8UN/e4SEYhJrpMOYrhR/T7gTQYvkN+dHKT62e1Ykf2w\r\nm5drveWRDVRpBk7zMml0DsruR1HKUYTmgonU/Q==',
								$: {Id: 'SignatureValue358337'}
							}
						],
						'ds:KeyInfo': [
							{
								$: {Id: 'Certificate1360658'},
								'ds:X509Data': [
									{
										'ds:X509Certificate': [
											'MIIJcTCCB1mgAwIBAgIEW2JbhzANBgkqhkiG9w0BAQsFADCBoTELMAkGA1UEBhMCRUMxIjAgBgNV\r\nBAoTGUJBTkNPIENFTlRSQUwgREVMIEVDVUFET1IxNzA1BgNVBAsTLkVOVElEQUQgREUgQ0VSVElG\r\nSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTi1FQ0lCQ0UxDjAMBgNVBAcTBVFVSVRPMSUwIwYDVQQDExxB\r\nQyBCQU5DTyBDRU5UUkFMIERFTCBFQ1VBRE9SMB4XDTIwMDExNjE3MTE1N1oXDTIyMDExNjE3NDE1\r\nN1owgbQxCzAJBgNVBAYTAkVDMSIwIAYDVQQKExlCQU5DTyBDRU5UUkFMIERFTCBFQ1VBRE9SMTcw\r\nNQYDVQQLEy5FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04tRUNJQkNFMQ4w\r\nDAYDVQQHEwVRVUlUTzE4MBEGA1UEBRMKMDAwMDI1MzQ5MDAjBgNVBAMTHEpPUkdFIEFMT05TTyBW\r\nQUxFTkNJQSBDQVNUUk8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC9fjO7khvhMI1I\r\nWbH+sm4FxvdMPBDepWKkCH8YldEvjKackWIgnp0ZyTNX0YnM7SCXusHFCrB90TQQEUYonhFDkRxm\r\nQm2KlmAnIpSHN/Df6oCNoY9Rm8tBt1sz1cokYYVlTn1Sg316uSB/JmzU3pZivyDLlvUwH1l9mgyV\r\nkkzO1qcBKSYrsoHdme2DfMgr2IJPSoHfYsTV7GO7UQhOBtQh3Ex3zvzoU9I+y++nLkP9jP5Qi4ey\r\niP9Tl7YOlM/5XsDZ6uLx9d88A4ct0a3C9B/RjQfaUSqN3i4M+SN18B7s5QvlSkL8oXhYmnjXxq9u\r\nR0xBECdB4pT6R6dsz7WCzA4zAgMBAAGjggSaMIIEljCBkQYIKwYBBQUHAQEEgYQwgYEwPgYIKwYB\r\nBQUHMAGGMmh0dHA6Ly9vY3NwLmVjaS5iY2UuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9vY3Nw\r\nMD8GCCsGAQUFBzABhjNodHRwOi8vb2NzcDEuZWNpLmJjZS5lYy9lamJjYS9wdWJsaWN3ZWIvc3Rh\r\ndHVzL29jc3AwMAYKKwYBBAGCqDsDCgQiEyBSRVBSRVNFTlRBQ0lPTkVTIFZBTEVSTyBDSUEgTFRE\r\nQTAdBgorBgEEAYKoOwMLBA8TDTE3OTIwMTI5MjkwMDEwGgYKKwYBBAGCqDsDAQQMEwoxNzE5MDE4\r\nMTkyMBwGCisGAQQBgqg7AwIEDhMMSk9SR0UgQUxPTlNPMBgGCisGAQQBgqg7AwMEChMIVkFMRU5D\r\nSUEwFgYKKwYBBAGCqDsDBAQIEwZDQVNUUk8wHwYKKwYBBAGCqDsDBQQREw9HRVJFTlRFIEdFTkVS\r\nQUwwOwYKKwYBBAGCqDsDBwQtEytBViBHQUxPIFBMQVpBIExBU1NPIFNOIFkgQVZFTExBTkVEQSBL\r\nTSA1IDEyMBkGCisGAQQBgqg7AwgECxMJMDIyNDgxNzMxMBUGCisGAQQBgqg7AwkEBxMFUXVpdG8w\r\nFwYKKwYBBAGCqDsDDAQJEwdFQ1VBRE9SMCAGCisGAQQBgqg7AzMEEhMQU09GVFdBUkUtQVJDSElW\r\nTzAiBgNVHREEGzAZgRdqdmFsZW5jaWFAcmVwY29yb25hLmNvbTCCAd8GA1UdHwSCAdYwggHSMIIB\r\nzqCCAcqgggHGhoHVbGRhcDovL2JjZXFsZGFwc3VicDEuYmNlLmVjL2NuPUNSTDkwOCxjbj1BQyUy\r\nMEJBTkNPJTIwQ0VOVFJBTCUyMERFTCUyMEVDVUFET1IsbD1RVUlUTyxvdT1FTlRJREFEJTIwREUl\r\nMjBDRVJUSUZJQ0FDSU9OJTIwREUlMjBJTkZPUk1BQ0lPTi1FQ0lCQ0Usbz1CQU5DTyUyMENFTlRS\r\nQUwlMjBERUwlMjBFQ1VBRE9SLGM9RUM/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlhjRo\r\ndHRwOi8vd3d3LmVjaS5iY2UuZWMvQ1JML2VjaV9iY2VfZWNfY3JsZmlsZWNvbWIuY3JspIG1MIGy\r\nMQswCQYDVQQGEwJFQzEiMCAGA1UEChMZQkFOQ08gQ0VOVFJBTCBERUwgRUNVQURPUjE3MDUGA1UE\r\nCxMuRU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OLUVDSUJDRTEOMAwGA1UE\r\nBxMFUVVJVE8xJTAjBgNVBAMTHEFDIEJBTkNPIENFTlRSQUwgREVMIEVDVUFET1IxDzANBgNVBAMT\r\nBkNSTDkwODALBgNVHQ8EBAMCBSAwHwYDVR0jBBgwFoAUSKLfIx8d+CxReowDzUkypQnBlKswHQYD\r\nVR0OBBYEFLuhw1qdxEVo5l1t451Gy+OT7/B1MAkGA1UdEwQCMAAwGQYJKoZIhvZ9B0EABAwwChsE\r\nVjguMQMCBJAwDQYJKoZIhvcNAQELBQADggIBALAqe2kqxLxabxRmEkQXzTqgi0Z8nBLr1xEUj2xa\r\nePjJTLFM5O0xjk+HgbPilqt8Oslrq8RfQ8dLArnrO+apP14VcocqLVelWeiQGzPnuZ6nRPYHjB6p\r\nulBURLpJDMn1GG2LQXGRPgUu+XE93pz6j+CD4ysLl9gMNHO1ooAd3I2Dl/TOPbUfTKorVTZ44KEb\r\nYxyRahaGiOIz9YCOludXnADIN5ybvgZ1rm48D0LU2rIRIg6Qr+EZtluh+cfX4tAmbxGSo+DvUP0O\r\nx2RBEnG+JtreSurr8V1rApuyNuM7aqLLB+YHnK/TIiJsas40/7JaNgUKdiKGOgON4Fs4sgcapHfo\r\ncxIuwWLltdjVh8COZTj/K/S6LLw8Vvzch9Zfp0qkcbrYmRWhOs4NvQdenldAlRuVm6izA6afgmpJ\r\nyPumPxB9ZY3je14SVJ2yAFGhvBvaVz35gbSLkgwjBLVddxNVZjhNNJ2tl243qE+wM0+ddX40Twrq\r\nrJIlQLAMhfbqzphavoNjdRhYCMuv/iqHyQvc6AFTMrH5iy2yQkGqiZ1+J5CO0NjWUm2BMDgFzLeN\r\nDA1Oou7xBGVsUNvw7sbAr2ubww7hWZSvXITK9wyE5/6A0RGfIr3duTWeoTF278TFI/OeTeRPSQ5v\r\nl1s2LlphnU+xuUvR9SxRQZqI6biL7MmvpNQF'
										]
									}
								],
								'ds:KeyValue': [
									{
										'ds:RSAKeyValue': [
											{
												'ds:Modulus': [
													'vX4zu5Ib4TCNSFmx/rJuBcb3TDwQ3qVipAh/GJXRL4ymnJFiIJ6dGckzV9GJzO0gl7rBxQqwfdE0\r\nEBFGKJ4RQ5EcZkJtipZgJyKUhzfw3+qAjaGPUZvLQbdbM9XKJGGFZU59UoN9erkgfyZs1N6WYr8g\r\ny5b1MB9ZfZoMlZJMztanASkmK7KB3Zntg3zIK9iCT0qB32LE1exju1EITgbUIdxMd8786FPSPsvv\r\npy5D/Yz+UIuHsoj/U5e2DpTP+V7A2eri8fXfPAOHLdGtwvQf0Y0H2lEqjd4uDPkjdfAe7OUL5UpC\r\n/KF4WJp418avbkdMQRAnQeKU+kenbM+1gswOMw=='
												],
												'ds:Exponent': ['AQAB']
											}
										]
									}
								]
							}
						],
						'ds:Object': [
							{
								$: {Id: 'Signature753129-Object801097'},
								'etsi:QualifyingProperties': [
									{
										$: {Target: '#Signature753129'},
										'etsi:SignedProperties': [
											{
												$: {Id: 'Signature753129-SignedProperties760751'},
												'etsi:SignedSignatureProperties': [
													{
														'etsi:SigningTime': ['2020-08-24T15:41:30-05:00'],
														'etsi:SigningCertificate': [
															{
																'etsi:Cert': [
																	{
																		'etsi:CertDigest': [
																			{
																				'ds:DigestMethod': [
																					{
																						$: {
																							Algorithm:
																								'http://www.w3.org/2000/09/xmldsig#sha1'
																						}
																					}
																				],
																				'ds:DigestValue': [
																					'z4S8GQYOn/V7zgxPGJ4gkQaT3cc='
																				]
																			}
																		],
																		'etsi:IssuerSerial': [
																			{
																				'ds:X509IssuerName': [
																					'CN=AC BANCO CENTRAL DEL ECUADOR,L=QUITO,OU=ENTIDAD DE CERTIFICACION DE INFORMACION-ECIBCE,O=BANCO CENTRAL DEL ECUADOR,C=EC'
																				],
																				'ds:X509SerialNumber': ['1533172615']
																			}
																		]
																	}
																]
															}
														]
													}
												],
												'etsi:SignedDataObjectProperties': [
													{
														'etsi:DataObjectFormat': [
															{
																$: {ObjectReference: '#Reference-ID-27600'},
																'etsi:Description': ['contenido comprobante'],
																'etsi:MimeType': ['text/xml']
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		}
	],
	mensajes: ['']
};
