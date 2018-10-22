const {Record, List} = require('immutable');

const Header = new Record({name: '', numberFormat: ''});

// https://stackoverflow.com/a/49621979/3692286

const text = '2';
const date = 'd/m/yyyy';
const currency = '$#.##0.00;[Red]#.##0.00';

const headers = new List([
	new Header({name: 'Forma de Pago', numberFormat: text}),
	new Header({name: 'Fecha', numberFormat: date}),
	new Header({name: 'Estab', numberFormat: text}),
	new Header({name: 'ptoEmi', numberFormat: text}),
	new Header({name: 'Secuencial', numberFormat: text}),
	new Header({name: 'Proveedor', numberFormat: text}),
	new Header({name: 'Ruc', numberFormat: text}),
	new Header({name: 'Autorización', numberFormat: text}),
	new Header({name: 'Concepto', numberFormat: text}),
	new Header({name: 'Tarifa 0', numberFormat: currency}),
	new Header({name: 'Tarifa 12', numberFormat: currency}),
	new Header({name: 'Tarifa 15', numberFormat: currency}),
	new Header({name: 'Iva', numberFormat: currency}),
	new Header({name: 'Ice', numberFormat: currency}),
	new Header({name: 'Total', numberFormat: currency}),
	new Header({name: 'Código', numberFormat: text}),
]);

module.exports = headers;
