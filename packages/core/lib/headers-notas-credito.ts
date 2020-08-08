import {text, date, currency} from './header';

const headers = [
	{name: 'Fecha', numberFormat: date},
	{name: 'Compr. Estab.', numberFormat: text},
	{name: 'Compr. Pto. Emi.', numberFormat: text},
	{name: 'Compr. Secuencial', numberFormat: text},
	{name: 'Proveedor', numberFormat: text},
	{name: 'RUC', numberFormat: text},
	{name: '# Autorizacion', numberFormat: text},
	{name: 'Concepto', numberFormat: text},
	{name: 'Tarifa 0', numberFormat: currency},
	{name: 'Tarifa 12', numberFormat: currency},
	{name: 'Tarifa 15', numberFormat: currency},
	{name: 'IVA', numberFormat: currency},
	{name: 'ICE', numberFormat: currency},
	{name: 'Total', numberFormat: currency}
];

export default headers;
