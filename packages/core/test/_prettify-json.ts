import * as fs from 'fs';
import {join} from 'path';

import * as glob from 'glob';
import * as pMap from 'p-map';

const {readFile, writeFile} = fs.promises;

(async () => {
	const globChildren = glob.sync(join(__dirname, '**', '*.json'));
	pMap(globChildren, (async file => {
		const content = await readFile(file, {encoding: 'utf-8', flag: 'r'});
		const originalJson = JSON.parse(content);
		const entries = Object.entries(originalJson);
		entries.sort(([k1], [k2]) => k1.localeCompare(k2, 'en'));
		const newJson = JSON.stringify(Object.fromEntries(entries), null, 2);
		await writeFile(file, newJson);
	})).catch(e => {
		console.error(e);
	});
})().catch(e => {
	console.error(e);
});
