const fs = require('fs');
const tmp = require('tmp');

const lazy = require('lazy.js');
const express = require('express');
const multer = require('multer');
const {parse: parseInvoice} = require('ortalis');
const {rowify} = require('ortalis');
const {generateCsv} = require('ortalis');

const upload = multer({dest: '/tmp'});

const router = new express.Router();

router.get('/', (req, res) => {
	res.render('index', {title: 'Chachalaca'});
});

router.post('/generateCsv', upload.array('files'), (req, res) => {
	const xmlFiles = lazy(req.files).filter(f => f.originalname.endsWith('.xml'));
	const filePaths = xmlFiles.map(f => f.path);
	const fileContents = filePaths.map(f =>
		fs.readFileSync(f, {encoding: 'UTF-8', flag: 'r'})
	);
	const parsedObjects = fileContents.map(f => parseInvoice(f));
	const rows = parsedObjects.map(r => rowify(r)).filter(r => r !== null);
	const tmpFilePath = tmp.tmpNameSync();
	generateCsv(tmpFilePath, rows);
	res.download(tmpFilePath, 'filename.xml', err => {
		if (err) {
			console.log('ERROR OCCURRED');
		} else {
			console.log('ALLES GUT');
		}
	});
});

module.exports = router;
