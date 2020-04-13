const aCode = 'A'.charCodeAt(0);

export default function coordinateToCell(rowNum: number, colNum: number): string {
	// Where A = 0, rows should start at 1
	if (rowNum < 1) {
		throw new Error('Rows start at 1, not 0');
	}

	return String.fromCharCode(aCode + colNum) + rowNum.toString();
}
