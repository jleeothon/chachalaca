declare function parse(content: string): Promise<parse.Autorizacion>;

export = parse;

declare namespace parse {
	interface Autorizacion {
		comprobante: Comprobante;
		numeroAutorizacion: string;
	}

	interface Comprobante {
		factura?: Factura;
		comprobanteRetencion?: ComprobanteRetencion;
		notaCredito?: NotaCredito;
	}

	interface Factura {
		infoTributaria: InfoTributaria;
		infoFactura: InfoFactura;
	}

	interface ComprobanteRetencion {
		infoTributaria: InfoTributaria;
		infoCompRetencion: InfoCompRetencion;
		impuestos: Impuesto[];
	}

	interface NotaCredito {
		infoTributaria: InfoTributaria;
		infoNotaCredito: InfoNotaCredito;
	}

	interface InfoTributaria {
		estab: string;
		ptoEmi: string;
		secuencial: string;
		razonSocial: string;
		nombreComercial?: string;
		ruc: string;
	}

	interface InfoFactura {
		fechaEmision: Date;
		totalConImpuestos: TotalImpuesto[];
		importeTotal: number;
		pagos?: Pago[];
	}

	interface InfoCompRetencion {
		fechaEmision: Date;
		dirEstablecimiento: string;
		obligadoContabilidad: string;
		tipoIdentificacionSujetoRetenido: string;
		razonSocialSujetoRetenido: string;
		identificacionSujetoRetenido: string;
		periodoFiscal: string;
	}

	interface Pago {
		formaPago: string;
		total: string;
	}

	interface InfoNotaCredito {
		fechaEmision: Date;
		totalConImpuestos: TotalImpuesto[];
		valorModificacion: number;
	}

	interface TotalImpuesto {
		codigo: string;
		codigoPorcentaje: string;
		baseImponible: number;
		tarifa?: number;
		valor?: number;
	}

	interface Impuesto {
		codigo: string;
		codigoPorcentaje: string;
		baseImponible: number;
		porcentajeRetener: number;
		valorRetenido: number;
		codDocSustento: string;
		numDocSustento: string;
		fechaEmisionDocSustento: Date;
	}
}
