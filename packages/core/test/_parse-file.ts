import {readFileSync} from 'fs';
import {join} from 'path';

import parse from '../lib/parse';

export default function parseFile(filePath): Record<string, unknown> {
	const testXmlPath = join(__dirname, 'test-input', filePath);
	const content = readFileSync(testXmlPath, {flag: 'r', encoding: 'utf-8'});
	const parsedObject = parse(content);
	return parsedObject;
}
