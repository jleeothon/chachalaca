const fs = require('fs');
const tmp = require('tmp');

const {Seq: seq} = require('immutable');
const bunyan = require('bunyan');
const express = require('express');
const multer = require('multer');

const log = bunyan.createLogger({name: 'chachalaca'});

module.exports = log;

const {
	generateXlsx,
	parse: parseInvoice,
	rowifyComprobanteRetencion,
	rowifyFactura,
	rowifyNotaCredito,
	triageAutorizacion
} = require('@jleeothon/chachalaca-core');

const upload = multer({dest: '/tmp'});

const router = new express.Router();

router.get('/', (_request, response) => {
	response.render('index', {title: 'Chachalaca'});
});

router.post(
	'/generate-xlsx',
	upload.array('files'),
	logError,
	async (request, response) => {
		const xmlFiles = seq(request.files).filter((f) =>
			f.originalname.endsWith('.xml')
		);
		const filePaths = xmlFiles.map((f) => f.path);
		const fileContents = filePaths.map((f) =>
			fs.readFileSync(f, {encoding: 'UTF-8', flag: 'r'})
		);
		const parsedObjects = fileContents.map((f) => parseInvoice(f));
		const triagedObs = parsedObjects.groupBy(triageAutorizacion).toJS();
		const {
			factura: facturaArray = [],
			comprobanteRetencion: comprobanteRetencionArray = [],
			notaCredito: notaCreditoArray = []
		} = triagedObs;

		const facturaRows = facturaArray.map((r) => rowifyFactura(r));
		const comprobanteRetencionRows = comprobanteRetencionArray.map((r) =>
			rowifyComprobanteRetencion(r)
		);
		const notaCreditoRows = notaCreditoArray.map((r) => rowifyNotaCredito(r));

		const temporaryFilePath = tmp.tmpNameSync() + '.xlsx';
		await generateXlsx(
			temporaryFilePath,
			facturaRows,
			comprobanteRetencionRows,
			notaCreditoRows
		);
		const responseType =
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
		response.type(responseType);
		response.sendFile(temporaryFilePath, handleDownloadError);
	}
);

function handleDownloadError(err) {
	if (err) {
		log.error('Error occurred sending file');
	} else {
		log.info('Successfully sent file');
	}
}

async function logError(_request, _response, next) {
	try {
		await next();
	} catch (error) {
		log.error(error);
	}
}

module.exports = router;
