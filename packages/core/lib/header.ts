// TODO include column to pick from Row object

export default interface Header {
	readonly name: string;
	readonly numberFormat: string;
}

export const text = '@';
export const date = 'd/m/yyyy';
export const currency = '$#,##0.00_);($#,##0.00)';
