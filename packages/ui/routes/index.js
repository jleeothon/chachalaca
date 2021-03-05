const tmp = require('tmp');
const {readFileSync} = require('fs');

const AWS = require('aws-sdk');
const bunyan = require('bunyan');
const express = require('express');
const multer = require('multer');
const pMap = require('p-map');
const formatISO = require('date-fns/formatISO');

const log = bunyan.createLogger({name: 'chachalaca'});

const s3Endpoint = process.env.S3_ENDPOINT;
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const spacesEndpoint = new AWS.Endpoint(s3Endpoint);
if (!accessKeyId || !secretAccessKey) {
	log.error('Did not find credentials for S3');
	throw new Error('Did not find credentials for S3');
}

const s3 = new AWS.S3({
	endpoint: spacesEndpoint,
	accessKeyId,
	secretAccessKey
});

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
	const dateTime = formatISO(new Date()).replace(/\D/g, '-').slice(0, -1);
	const date = formatISO(new Date(), {representation: 'date'});
	const {length} = filePaths.length.toString();

	const fileInfos = filePaths.map((filePath, index) => {
		const paddedIndex = (index + 1).toString().padStart(length, '0');
		const key = `${date}/${dateTime} - ${paddedIndex}.xml`;
		return {key, path: filePath};
	});

	return pMap(fileInfos, (fileInfo) => uploadFile(fileInfo), {concurrency: 3});
}

async function uploadFile({key, path}) {
	const parameters = {
		Bucket: 'chachalaca-space-1',
		Key: key,
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
