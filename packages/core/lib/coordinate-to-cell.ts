const aCode = 'A'.charCodeAt(0);

export default function coordinateToCell(
	rowNumber: number,
	colNumber: number
): string {
	// Where A = 0, rows should start at 1
	if (rowNumber < 1) {
		throw new Error('Rows start at 1, not 0');
	}

	return String.fromCharCode(aCode + colNumber) + rowNumber.toString();
}
