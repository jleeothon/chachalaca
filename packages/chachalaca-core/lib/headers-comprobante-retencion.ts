import {text, date, currency} from './header';

export default [
	{name: 'Fecha', numberFormat: date},
	{name: 'Concepto', numberFormat: text},
	{name: 'Base Renta', numberFormat: currency},
	{name: 'Base Imp. Iva', numberFormat: currency},
	{name: '% Renta', numberFormat: text},
	{name: '% Iva', numberFormat: text},
	{name: '# Fact. Emitida', numberFormat: text},
	{name: '# Aut. Fact.', numberFormat: text},
	{name: 'RUC Beneficiario', numberFormat: text},
	{name: 'Beneficiario', numberFormat: text},
	{name: 'Compr. Estab.', numberFormat: text},
	{name: 'Compr. Pto. Emi.', numberFormat: text},
	{name: 'Compr. Secuencial', numberFormat: text},
	{name: 'Ret. Renta', numberFormat: currency},
	{name: 'Ret. IVA', numberFormat: currency},
	{name: '# Aut. Retencion', numberFormat: text}
];
