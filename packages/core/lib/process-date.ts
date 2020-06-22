export default function processDate(rawDate: string): Date {
	const [day, month, year] = rawDate
		.split('/')
		.map((i) => Number.parseInt(i, 10));
	return new Date(year, month - 1, day);
}
