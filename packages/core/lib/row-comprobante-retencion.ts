export default class RowCr {
	readonly autRetencion: string;
	readonly baseRenta: number;
	readonly baseImpIva: number;
	readonly beneficiario: string;
	readonly compRetencion1: string;
	readonly compRetencion2: string;
	readonly compRetencion3: string;
	readonly concepto: string;
	readonly fecha: Date;
	readonly numeroAutorizacionFactura: string;
	readonly numeroFacturaEmitida: string;
	readonly porcentajeIva: number;
	readonly porcentajeRenta: number;
	readonly retIva: number;
	readonly retRenta: number;
	readonly rucBeneficiario: string;

	public constructor({
		autRetencion,
		baseImpIva,
		baseRenta,
		beneficiario,
		compRetencion1,
		compRetencion2,
		compRetencion3,
		concepto,
		fecha,
		numeroAutorizacionFactura,
		numeroFacturaEmitida,
		porcentajeIva,
		porcentajeRenta,
		retIva,
		retRenta,
		rucBeneficiario
	}: {
		autRetencion: string;
		baseImpIva: number;
		baseRenta: number;
		beneficiario: string;
		compRetencion1: string;
		compRetencion2: string;
		compRetencion3: string;
		concepto: string;
		fecha: Date;
		numeroAutorizacionFactura: string;
		numeroFacturaEmitida: string;
		porcentajeIva: number;
		porcentajeRenta: number;
		retIva: number;
		retRenta: number;
		rucBeneficiario: string;
	}) {
		this.autRetencion = autRetencion;
		this.baseImpIva = baseImpIva;
		this.baseRenta = baseRenta;
		this.beneficiario = beneficiario;
		this.compRetencion1 = compRetencion1;
		this.compRetencion2 = compRetencion2;
		this.compRetencion3 = compRetencion3;
		this.concepto = concepto;
		this.fecha = fecha;
		this.numeroAutorizacionFactura = numeroAutorizacionFactura;
		this.numeroFacturaEmitida = numeroFacturaEmitida;
		this.porcentajeIva = porcentajeIva;
		this.porcentajeRenta = porcentajeRenta;
		this.retIva = retIva;
		this.retRenta = retRenta;
		this.rucBeneficiario = rucBeneficiario;
	}

	toArray(): Array<string | Date | number> {
		return [
			this.fecha,
			this.concepto,
			this.baseRenta,
			this.baseImpIva,
			this.porcentajeRenta,
			this.porcentajeIva,
			this.numeroFacturaEmitida,
			this.numeroAutorizacionFactura,
			this.rucBeneficiario,
			this.beneficiario,
			this.compRetencion1,
			this.compRetencion2,
			this.compRetencion3,
			this.retRenta,
			this.retIva,
			this.autRetencion
		];
	}
}
