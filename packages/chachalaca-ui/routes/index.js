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
	triageAutorizacion,
} = require('ortalis');

const upload = multer({dest: '/tmp'});

const router = new express.Router();

router.get('/', (req, res) => {
	res.render('index', {title: 'Chachalaca'});
});

router.post(
	'/generate-xlsx',
	upload.array('files'),
	logError,
	async (req, res) => {
		const xmlFiles = seq(req.files).filter(f =>
			f.originalname.endsWith('.xml')
		);
		const filePaths = xmlFiles.map(f => f.path);
		const fileContents = filePaths.map(f =>
			fs.readFileSync(f, {encoding: 'UTF-8', flag: 'r'})
		);
		const parsedObjects = fileContents.map(f => parseInvoice(f));
		const triagedObs = parsedObjects.groupBy(triageAutorizacion).toJS();
		const {
			factura: facturaArr = [],
			comprobanteRetencion: comprobanteRetencionArr = [],
			notaCredito: notaCreditoArr = [],
		} = triagedObs;

		const facturaRows = facturaArr.map(r => rowifyFactura(r));
		const comprobanteRetencionRows = comprobanteRetencionArr.map(r =>
			rowifyComprobanteRetencion(r)
		);

		const tmpFilePath = tmp.tmpNameSync() + '.xlsx';
		await generateXlsx(tmpFilePath, facturaRows, comprobanteRetencionRows, notaCreditoArr);
		const responseType =
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
		res.type(responseType);
		res.sendFile(tmpFilePath, handleDownloadError);
	}
);

function handleDownloadError(err) {
	if (err) {
		log.error('Error occurred sending file');
	} else {
		log.info('Successfully sent file');
	}
}

async function logError(req, res, next) {
	try {
		await next();
	} catch (e) {
		log.error(e);
	}
}

module.exports = router;
