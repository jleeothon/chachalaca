const aCode = 'A'.charCodeAt(0);

/**
 * Where i starts at 0? or was it 1?
 */
export default function numberToColumn(i: number): string {
	return String.fromCharCode(aCode + i);
}
