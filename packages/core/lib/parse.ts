import * as parse2 from '@jleeothon/chachalaca-parser';

export default async function parse(
	content: string
): Promise<parse2.Autorizacion> {
	return parse2(content);
}
