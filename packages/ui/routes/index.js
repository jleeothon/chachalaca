const tmp = require('tmp');
const {readFileSync} = require('fs');

const AWS = require('aws-sdk');
const bunyan = require('bunyan');
const express = require('express');
const multer = require('multer');
const pMap = require('p-map');
const formatISO = require('date-fns/formatISO');

const spacesEndpoint = new AWS.Endpoint('fra1.digitaloceanspaces.com');

const s3 = new AWS.S3({
	endpoint: spacesEndpoint,
	accessKeyId: '...',
	secretAccessKey: '...'
});

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
		console.log(xmlFiles);
		const filePaths = xmlFiles.map((f) => f.path);

		await uploadFiles(filePaths);

		const temporaryFilePath = tmp.tmpNameSync() + '.xlsx';
		await generateFromFiles(filePaths, temporaryFilePath);

		const responseType =
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
		response.type(responseType);
		response.sendFile(temporaryFilePath, handleDownloadError);
	}
);

async function uploadFiles(filePaths) {
	const date = formatISO(new Date()).replace(/\D/g, '-').slice(0, -1);
	const {length} = filePaths.length.toString();

	const fileInfos = filePaths.map((filePath, index) => {
		const paddedIndex = (index + 1).toString().padStart(length, '0');
		const name = `${date} - ${paddedIndex}.xml`;
		return {name, path: filePath};
	});

	return pMap(fileInfos, (fileInfo) => uploadFile(fileInfo), {concurrency: 3});
}

async function uploadFile({name, path}) {
	const parameters = {
		Bucket: 'chachalaca-space-1',
		Key: name,
		Body: readFileSync(path),
		ACL: 'private'
	};

	return new Promise((resolve, reject) => {
		s3.upload(parameters, (err, data) => {
			if (err) {
				return reject(err);
			}

			return resolve(data);
		});
	});
}

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
