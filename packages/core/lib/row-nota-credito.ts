export default class RowNotaCredito {
	readonly autorizacion: string;
	readonly concepto: string;
	readonly fecha: Date;
	readonly iva: string;
	readonly ice: string;
	readonly estab: string;
	readonly ptoEmi: string;
	readonly secuencial: string;
	readonly proveedor: string;
	readonly ruc: string;
	readonly tarifa0: string;
	readonly tarifa12: string;
	readonly tarifa15: string;
	readonly total: string;

	constructor({
		autorizacion,
		concepto,
		fecha,
		iva,
		ice,
		estab,
		ptoEmi,
		secuencial,
		proveedor,
		ruc,
		tarifa0,
		tarifa12,
		tarifa15,
		total
	}: {
		autorizacion: string;
		concepto: string;
		fecha: Date;
		iva: string;
		ice: string;
		estab: string;
		ptoEmi: string;
		secuencial: string;
		proveedor: string;
		ruc: string;
		tarifa0: string;
		tarifa12: string;
		tarifa15: string;
		total: string;
	}) {
		this.autorizacion = autorizacion;
		this.concepto = concepto;
		this.fecha = fecha;
		this.iva = iva;
		this.ice = ice;
		this.estab = estab;
		this.ptoEmi = ptoEmi;
		this.secuencial = secuencial;
		this.proveedor = proveedor;
		this.ruc = ruc;
		this.tarifa0 = tarifa0;
		this.tarifa12 = tarifa12;
		this.tarifa15 = tarifa15;
		this.total = total;
	}

	toArray(): Array<string|Date> {
		return [
			this.fecha,
			this.estab,
			this.ptoEmi,
			this.secuencial,
			this.proveedor,
			this.ruc,
			this.autorizacion,
			this.concepto,
			this.tarifa0,
			this.tarifa12,
			this.tarifa15,
			this.iva,
			this.ice,
			this.total
		];
	}
}