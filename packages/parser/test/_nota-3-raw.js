module.exports = {
	estado: ['AUTORIZADO'],
	numeroAutorizacion: ['3108202004099215390300120010060000024868331943317'],
	fechaAutorizacion: ['2020-08-31T12:12:44-05:00'],
	ambiente: ['PRODUCCIÓN'],
	comprobante: [
		{
			notaCredito: {
				$: {id: 'comprobante', version: '1.1.0'},
				infoTributaria: [
					{
						ambiente: ['2'],
						tipoEmision: ['1'],
						razonSocial: ['TRANSCASH S.A.'],
						ruc: ['0992153903001'],
						claveAcceso: ['3108202004099215390300120010060000024868331943317'],
						codDoc: ['04'],
						estab: ['001'],
						ptoEmi: ['006'],
						secuencial: ['000002486'],
						dirMatriz: ['Alborada XI Etapa Mz. 13 S.10']
					}
				],
				infoNotaCredito: [
					{
						fechaEmision: ['31/08/2020'],
						tipoIdentificacionComprador: ['04'],
						razonSocialComprador: ['RAZON SOCIAL COMPRADOR MEXLR35'],
						identificacionComprador: ['IDENTIFICACION QBYOFK4'],
						contribuyenteEspecial: ['0000'],
						obligadoContabilidad: ['SI'],
						codDocModificado: ['01'],
						numDocModificado: ['001-006-000012593'],
						fechaEmisionDocSustento: ['21/08/2020'],
						totalSinImpuestos: ['11.71'],
						valorModificacion: ['13.11'],
						moneda: ['DOLAR'],
						totalConImpuestos: [
							{
								totalImpuesto: [
									{
										codigo: ['2'],
										codigoPorcentaje: ['2'],
										baseImponible: ['11.71'],
										valor: ['1.41']
									}
								]
							}
						],
						motivo: ['GENERADOS POR REGISTRO DE DEVOLUCIONES']
					}
				],
				detalles: [
					{
						detalle: [
							{
								codigoInterno: ['CSLLUCBLA'],
								codigoAdicional: ['CSLLUCBLA'],
								descripcion: ['CERAMICA CSL LUCIENNE BLANCO (45*45) 2.08M2'],
								cantidad: ['2.08'],
								precioUnitario: ['5.8036'],
								descuento: ['0.36'],
								precioTotalSinImpuesto: ['11.71'],
								impuestos: [
									{
										impuesto: [
											{
												codigo: ['2'],
												codigoPorcentaje: ['2'],
												tarifa: ['12'],
												baseImponible: ['11.71'],
												valor: ['1.41']
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
							{_: 'AGUIRRE 1316 Y AVDA.MACHALA', $: {nombre: 'Direccion'}},
							{_: '042511422  0992104508', $: {nombre: 'tELEFONO'}},
							{
								_:
									'VENTASBEST@OUTLOOK.COM;BESTSERVICEEC@HOTMAIL.COM;VENTASBESTSERVICE@OUTLOOK.COM',
								$: {nombre: 'E-MAIL'}
							}
						]
					}
				],
				'ds:Signature': [
					{
						$: {
							'xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
							'xmlns:etsi': 'http://uri.etsi.org/01903/v1.3.2#',
							Id: 'Signature628129'
						},
						'ds:SignedInfo': [
							{
								$: {Id: 'Signature-SignedInfo72298'},
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
											Id: 'SignedPropertiesID96306',
											Type: 'http://uri.etsi.org/01903#SignedProperties',
											URI: '#Signature628129-SignedProperties1037461'
										},
										'ds:DigestMethod': [
											{$: {Algorithm: 'http://www.w3.org/2000/09/xmldsig#sha1'}}
										],
										'ds:DigestValue': ['dzppiafpj5XPbUWVDO8vqokXPX8=']
									},
									{
										$: {URI: '#Certificate1124320'},
										'ds:DigestMethod': [
											{$: {Algorithm: 'http://www.w3.org/2000/09/xmldsig#sha1'}}
										],
										'ds:DigestValue': ['9uYw+AzvLWBZG4u2NAvoiC7u+38=']
									},
									{
										$: {Id: 'Reference-ID-789503', URI: '#comprobante'},
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
										'ds:DigestValue': ['NUKqNGAqiGy/DOweJFEvL9JgRBI=']
									}
								]
							}
						],
						'ds:SignatureValue': [
							{
								_:
									'bIz604IlKMMXNG4zg2t0WSCE5QP554YmUyCR7/1JJ8YIOu6Ty7BCsXMj8m4cKtGn5ac/6EDInRUc\nixveycV3MEoW8Waion5ttSzO52faCBv9k2Fu8pHWE/y0JMFiXA8nM9J6rXcxntmNlgPuJYOrftvI\naV79UNMSgIvlm6PQLs3Q/bcWZsEkWBs/dVichBOe/2h+9ZtX4VXyqbzOZxe4fDPP9Nrttxr8xZLw\njI/2QS6m9tctpwAqoHHLmBz29pPvJV4vOpNHzSfg5e9Fnw/G2F+POI1bwV9UnfHyzSaMi8egKVpz\nbhdyT8/mWvGzoGsniUvmdgqj9hp0E0rJTga1sQ==',
								$: {Id: 'SignatureValue99880'}
							}
						],
						'ds:KeyInfo': [
							{
								$: {Id: 'Certificate1124320'},
								'ds:X509Data': [
									{
										'ds:X509Certificate': [
											'MIILVTCCCT2gAwIBAgIEcKzPXzANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV\nBAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAxMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ\nT04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV\nQkNBLTEgU0VDVVJJVFkgREFUQTAeFw0yMDA3MTcxNTI4NDJaFw0yMjA3MTcxNTI4NDJaMIGbMQsw\nCQYDVQQGEwJFQzEdMBsGA1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDExMDAuBgNVBAsMJ0VOVElE\nQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEVMBMGA1UEBRMMMTcwNzIwMTAzODQx\nMSQwIgYDVQQDDBtKT1JHRSBBQlJBSEFNIFJPU0VSTyBNT1JFTk8wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQDQJRGzl6cZvb2iQ/sRe+bFDcW0Ndc2K4LiI8Neh8tXb8pWc0etuO4cJEii\nYniuwNsd2EnsVXJTxBsiG/F7aqHzMlvoV9inzOy7LDLPmaI7uWR6L0sFwQzNbNPvm16NRa+Z+3oL\nKz+6TQa4BqbUETUjaUpST1nkeMNFdn/wCGY0+suhRdAFPa12kKQLJ/BM4v4kuAiBrl0cEf9Gfuo7\nKWh+n3btoO61bfOgGeLrQlvJ6OSHt+SpCxSLuRC0iKYe0j5qZXxMoSF0dAo3n+ZMWgx4EPXYJRFR\nRGkcY4uqN8SespwKBnPwS86tGInIxo/GZaxywellSIkq59+a6lBS2oSvAgMBAAGjggafMIIGmzBZ\nBggrBgEFBQcBAQRNMEswSQYIKwYBBQUHMAGGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5l\ndC5lYy9lamJjYS9wdWJsaWN3ZWIvc3RhdHVzL29jc3AwHQYDVR0OBBYEFFasisczHBnaMGkfCwsA\n0OA1Dq/EMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUXA+FpHQQ/K0BLBoAPZMXCfo5AdYwKwYD\nVR0QBCQwIoAPMjAyMDA3MTcxNTI4NDJagQ8yMDIyMDcxNzE1Mjg0MlowgcwGA1UdLgSBxDCBwTCB\nvqCBu6CBuIaBtWxkYXA6Ly9sZGFwc2Quc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQg\nREUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0xIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJU\nSUZJQ0FDSU9OIERFIElORk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDEsQz1FQz9kZWx0\nYVJldm9jYXRpb25MaXN0P2Jhc2UwbQYDVR0gBGYwZDBiBgorBgEEAYKmcgIJMFQwUgYIKwYBBQUH\nAgIwRh5EAEMAZQByAHQAaQBmAGkAYwBhAGQAbwAgAGQAZQAgAFIAZQBwAHIAZQBzAGUAbgB0AGEA\nbgB0AGUAIABMAGUAZwBhAGwwggKeBgNVHR8EggKVMIICkTCB5aBBoD+GPWh0dHA6Ly9vY3NwZ3cu\nc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJjYS9wdWJsaWN3ZWIvc3RhdHVzL29jc3CigZ+kgZwwgZkx\nOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNVQkNBLTEgU0VDVVJJVFkgREFU\nQTEwMC4GA1UECwwnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OMR0wGwYD\nVQQKDBRTRUNVUklUWSBEQVRBIFMuQS4gMTELMAkGA1UEBhMCRUMwgcSggcGggb6GgbtsZGFwOi8v\nbGRhcHNkLnNlY3VyaXR5ZGF0YS5uZXQuZWMvQ049QVVUT1JJREFEIERFIENFUlRJRklDQUNJT04g\nU1VCQ0EtMSBTRUNVUklUWSBEQVRBLE9VPUVOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZP\nUk1BQ0lPTixPPVNFQ1VSSVRZIERBVEEgUy5BLiAxLEM9RUM/Y2VydGlmaWNhdGVSZXZvY2F0aW9u\nTGlzdD9iYXNlMIHfoIHcoIHZhoHWaHR0cHM6Ly9wb3J0YWwtb3BlcmFkb3Iuc2VjdXJpdHlkYXRh\nLm5ldC5lYy9lamJjYS9wdWJsaWN3ZWIvd2ViZGlzdC9jZXJ0ZGlzdD9jbWQ9Y3JsJmlzc3Vlcj1D\nTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0xIFNFQ1VSSVRZIERBVEEsT1U9RU5U\nSURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEu\nIDEsQz1FQzALBgNVHQ8EBAMCBeAwIwYDVR0RBBwwGoEYam9yZ2Vyb3Nlcm9tQGhvdG1haWwuY29t\nMBoGCisGAQQBgqZyAwEEDAwKMDkwMTI0NDg0ODAdBgorBgEEAYKmcgMCBA8MDUpPUkdFIEFCUkFI\nQU0wFgYKKwYBBAGCpnIDAwQIDAZST1NFUk8wFgYKKwYBBAGCpnIDBAQIDAZNT1JFTk8wGgYKKwYB\nBAGCpnIDBQQMDApQUkVTSURFTlRFMD0GCisGAQQBgqZyAwcELwwtQVYgTUFDSEFMQSAxNDM0IFkg\nQ0xFTUVOVEUgQkFMTEVOIFkgMTAgQUdPU1RPMBsGCisGAQQBgqZyAwgEDQwLNTkzNDM3MTEzOTAw\nGQYKKwYBBAGCpnIDCQQLDAlHVUFZQVFVSUwwHgYKKwYBBAGCpnIDCgQQDA5UUkFOU0NBU0ggUy5B\nLjAdBgorBgEEAYKmcgMLBA8MDTA5OTIxNTM5MDMwMDEwFwYKKwYBBAGCpnIDDAQJDAdFQ1VBRE9S\nMBIGCisGAQQBgqZyAx0EBAwCTm8wHwYKKwYBBAGCpnIDIAQRDA8wMDEwMDIwMDAwNDk4MTAwEwYK\nKwYBBAGCpnIDIQQFDANQRlgwEQYKKwYBBAGCpnIDIgQDDAEuMA0GCSqGSIb3DQEBCwUAA4ICAQAw\nWjkf/Qejfj+C0HLwSTE+pK3ZiFRFBFYmaZXasbk+bTdM7E6TvncsM25jEi0VhzI99tS+OF9rwuTt\nL3Rg4+2pnGB1VM2O5u9QfeQiDZLoyRyC1FUB/yvw1yM/2IJDc3yr3if2k7ZU/ngii9vVIzvBh6vd\nsQ9Tu6Yh5UW3SGdi1LcudrsuI1di7DuOR4pj/q4cd4O0EyLAE1FaPTVp6RalPGBIwzYUKS/HmqoD\n49drRrbdElMdqrAOj9gk+DJfVDfLfZifLtnW3dfh3nN653BS2e1yxohM4Q2XoR6rtTgTGtBt5Zb8\ncMBc9Tm26AtrX1THPmEMNA5D/rgg77TvlMdXSmi4o5GzLd7I4HMrKuer8IdlxPBWP+Uvf0rgw4tb\n3uZAbH75ide9RP2FVXnwGDBFF1j+Nt/yXqx8E9X5upBte06NhWu+QGjHQRbybPJPNSSkfdRA/oSL\nUDurR06fWw0WvCptsbb6CapC/SO8xI8IzX0UXB5tRPJcZoncLVfw/TmUXm6EFq8BrBIJ9+E/AY3k\n2jIU9syxCHq7WF9RR8rPDO1VAOcW2Wh5yeScm45LPORVOCW7w8T+aPICKhfd/ZZ2jde93Jv3uJ/8\njGHMOVk2YES9pHsQL9pQ3dWtWcsd7eGEvKnVOi/xSYDuOBMFGKuv194qYA7e1/MpeSXSTnrz8w=='
										]
									}
								],
								'ds:KeyValue': [
									{
										'ds:RSAKeyValue': [
											{
												'ds:Modulus': [
													'0CURs5enGb29okP7EXvmxQ3FtDXXNiuC4iPDXofLV2/KVnNHrbjuHCRIomJ4rsDbHdhJ7FVyU8Qb\nIhvxe2qh8zJb6FfYp8zsuywyz5miO7lkei9LBcEMzWzT75tejUWvmft6Cys/uk0GuAam1BE1I2lK\nUk9Z5HjDRXZ/8AhmNPrLoUXQBT2tdpCkCyfwTOL+JLgIga5dHBH/Rn7qOylofp927aDutW3zoBni\n60Jbyejkh7fkqQsUi7kQtIimHtI+amV8TKEhdHQKN5/mTFoMeBD12CURUURpHGOLqjfEnrKcCgZz\n8EvOrRiJyMaPxmWscsHpZUiJKuffmupQUtqErw=='
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
								$: {Id: 'Signature628129-Object337293'},
								'etsi:QualifyingProperties': [
									{
										$: {Target: '#Signature628129'},
										'etsi:SignedProperties': [
											{
												$: {Id: 'Signature628129-SignedProperties1037461'},
												'etsi:SignedSignatureProperties': [
													{
														'etsi:SigningTime': ['2020-08-31T12:06:28-05:00'],
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
																					'79OFT6JdzC0gOdnCouE2J3UbBlk='
																				]
																			}
																		],
																		'etsi:IssuerSerial': [
																			{
																				'ds:X509IssuerName': [
																					'CN=AUTORIDAD DE CERTIFICACION SUBCA-1 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 1,C=EC'
																				],
																				'ds:X509SerialNumber': ['1890373471']
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
																$: {ObjectReference: '#Reference-ID-789503'},
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
