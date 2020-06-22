import is from '@sindresorhus/is';
import * as dotProp from 'dot-prop';

export function getS(
	object: Record<string, unknown>,
	path: string,
	defaultValue?: string
): string {
	const value: string | undefined = dotProp.get(object, path, defaultValue);
	if (is.undefined(value)) {
		throw new Error(`Path ${path} not found`);
	}

	return value;
}

export function getO(
	object: Record<string, unknown>,
	path: string,
	defaultValue?: Record<string, unknown>
): Record<string, unknown> {
	const value: Record<string, unknown> | undefined = dotProp.get(
		object,
		path,
		defaultValue
	);
	if (is.undefined(value)) {
		throw new Error(`Path ${path} not found`);
	}

	return value;
}
