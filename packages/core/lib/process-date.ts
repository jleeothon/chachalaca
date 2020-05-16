export default function processDate(rawDate: string): Date {
	const [day, month, year] = rawDate.split('/').map(i => parseInt(i, 10));
	return new Date(year, month - 1, day);
}
