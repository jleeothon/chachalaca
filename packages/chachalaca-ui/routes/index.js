const fs = require('fs');
const tmp = require('tmp');

const lazy = require('lazy.js');
const express = require('express');
const multer = require('multer');
const {parse: parseInvoice} = require('ortalis');
const {rowify} = require('ortalis');

const generateXlsxData = require('./generate-xlsx');

const upload = multer({dest: '/tmp'});

const router = new express.Router();

router.get('/', (req, res) => {
	res.render('index', {title: 'Chachalaca'});
});

const handleDownloadError = err => {
	if (err) {
		console.log('ERROR OCCURRED');
	} else {
		console.log('ALLES GUT');
	}
};

router.post('/generate-xlsx', upload.array('files'), async (req, res) => {
	const xmlFiles = lazy(req.files).filter(f => f.originalname.endsWith('.xml'));
	const filePaths = xmlFiles.map(f => f.path);
	const fileContents = filePaths.map(f =>
		fs.readFileSync(f, {encoding: 'UTF-8', flag: 'r'})
	);
	const parsedObjects = fileContents.map(f => parseInvoice(f));
	const rows = parsedObjects.map(r => rowify(r)).filter(r => r !== null);

	const tmpFilePath = tmp.tmpNameSync() + '.xlsx';
	await generateXlsxData(tmpFilePath, rows);
	res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	res.sendFile(tmpFilePath, handleDownloadError);
});

module.exports = router;
