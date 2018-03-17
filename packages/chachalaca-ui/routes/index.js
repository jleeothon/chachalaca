const fs = require('fs')
const tmp = require('tmp')

const Lazy = require('lazy.js')
const express = require('express');
const multer = require('multer')
const glob = require('glob')
const parseInvoice = require('chachalaca').parse
const rowify = require('chachalaca').rowify
const generateCsv = require('chachalaca').generateCsv

const upload = multer({dest: '/tmp'})

const router = express.Router();

const getFileContents = function * (path) {
  yield fs.readFileSync(p, {flag: 'r'})
}

router.get('/', (req, res) => {
  res.render('index', {title: 'Ortalis'});
});

router.post('/generateCsv', upload.array('files'), (req, res) => {
  const xmlFiles = Lazy(req.files).filter(f => f.originalname.endsWith('.xml'))
  const filePaths = xmlFiles.map(f => f.path)
  const fileContents = filePaths.map(f => fs.readFileSync(f, {encoding: 'UTF-8', flag: 'r'}))
  const parsedObjects = fileContents.map(f => parseInvoice(f))
  const rows = parsedObjects.map(r => rowify(r))
  const rows = parsedObjects.map(r => rowify(r))


  const result = rowArrays.map(row => row.join(',')).join('\n')

  res.send(result)
  // res.download(req.files[0].path, 'filename.xml')
});


module.exports = router;
