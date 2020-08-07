import {text, date, currency} from './header';

const headers = [
	{name: 'Forma de Pago', numberFormat: text},
	{name: 'Fecha', numberFormat: date},
	{name: 'Estab', numberFormat: text},
	{name: 'ptoEmi', numberFormat: text},
	{name: 'Secuencial', numberFormat: text},
	{name: 'Proveedor', numberFormat: text},
	{name: 'Ruc', numberFormat: text},
	{name: 'Autorización', numberFormat: text},
	{name: 'Concepto', numberFormat: text},
	{name: 'Tarifa 0', numberFormat: currency},
	{name: 'Tarifa 12', numberFormat: currency},
	{name: 'Tarifa 15', numberFormat: currency},
	{name: 'Iva', numberFormat: currency},
	{name: 'Ice', numberFormat: currency},
	{name: 'Total', numberFormat: currency},
	{name: 'Código', numberFormat: text}
];

export default headers;
