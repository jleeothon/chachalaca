export default function (autorizacion: {comprobante}): string {
	const recognized = ['factura', 'comprobanteRetencion', 'notaCredito'];
	const result: string | undefined = recognized.find((i) =>
		Boolean(autorizacion.comprobante[i])
	);
	if (!result) {
		const comprobante = JSON.stringify(autorizacion.comprobante);
		throw new Error(`Unrecognized comprobante: ${comprobante}`);
	}

	return result;
}
