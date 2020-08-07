const {parse} = require('date-fns');

module.exports = function (dateString) {
	return parse(
		`${dateString} -0500`,
		'dd/MM/yyyy xx',
		new Date('2020-01-01T00:00:00.000-05:00')
	);
};
