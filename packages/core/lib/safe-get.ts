import is from '@sindresorhus/is';
import * as dotProp from 'dot-prop';

export function getS(obj: object, path: string, defaultValue?: string): string {
	const value: string|undefined = dotProp.get(obj, path, defaultValue);
	if (is.undefined(value)) {
		throw new Error(`Path ${path} not found`);
	}

	return value;
}

export function getO(obj: object, path: string, defaultValue?: object): object {
	const value: object|undefined = dotProp.get(obj, path, defaultValue);
	if (is.undefined(value)) {
		throw new Error(`Path ${path} not found`);
	}

	return value;
}
