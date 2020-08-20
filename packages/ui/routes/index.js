const fs = require('fs');
const tmp = require('tmp');

const bunyan = require('bunyan');
const express = require('express');
const multer = require('multer');

const log = bunyan.createLogger({name: 'chachalaca'});

const chachalacaCore = require('@jleeothon/chachalaca-core');

const {generateFromFiles} = chachalacaCore;

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
		const xmlFiles = request.files.filter((f) => f.mimetype === 'text/xml');
		const filePaths = xmlFiles.map((f) => f.path);
		const temporaryFilePath = tmp.tmpNameSync() + '.xlsx';
		await generateFromFiles(filePaths, temporaryFilePath);

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
