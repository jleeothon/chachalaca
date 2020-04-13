export interface RawAutorizacion {
	comprobante: string[];
	numeroAutorizacion: string[];
}

export interface Autorizacion {
	comprobante: Comprobante;
	numeroAutorizacion: string[];
}

export interface Comprobante {
	factura?: Factura;
	comprobanteRetencion?: ComprobanteRetencion;
	notaCredito?: NotaCredito;
}

export interface Factura {
	infoTributaria: InfoTributaria[];
	infoFactura: InfoFactura[];
}

export interface ComprobanteRetencion {
	infoTributaria: InfoTributaria[];
	impuestos: Impuesto[][];
}

export interface NotaCredito {
	infoTributaria: InfoTributaria[];
	infoNotaCredito: InfoNotaCredito[];
}

export interface InfoTributaria {
	estab: string;
	ptoEmi: string;
	secuencial: string;
}

export interface InfoFactura {
	fechaEmision: string[];
	totalConImpuestos: TotalConImpuestos[];
	importeTotal: string[];
	pagos: Pago[][];
}

export interface Pago {
	formaPago: string[];
	total: string[];
}

export interface InfoNotaCredito {
	fechaEmision: string[];
	totalConImpuestos: TotalConImpuestos[];
}

export interface TotalConImpuestos {
	// There _are_ a few entries for each
	totalImpuesto: TotalImpuesto[];
}

export interface TotalImpuesto {
	codigo: string[];
	codigoPorcentaje: string[];
	baseImponible: string[];
	tarifa: string[];
	valor: string[];
}

export interface Impuesto {
	codigo: string[];
	codigoPorcentaje: string[];
}
