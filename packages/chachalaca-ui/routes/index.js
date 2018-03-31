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
  res.render('index', {title: 'Erythroptera'});
});

router.post('/generateCsv', upload.array('files'), (req, res) => {
  const xmlFiles = Lazy(req.files).filter(f => f.originalname.endsWith('.xml'))
  const filePaths = xmlFiles.map(f => f.path)
  console.log("file paths", filePaths.join(";"))
  console.log("")
  const fileContents = filePaths.map(f => fs.readFileSync(f, {encoding: 'UTF-8', flag: 'r'}))
  // console.log("file contents", fileContents.join(";"))
  // console.log("")
  const parsedObjects = fileContents.map(f => parseInvoice(f))
  console.log("parsed objects size", parsedObjects.size())
  console.log("")
  const rows = parsedObjects.map(r => rowify(r)).filter(r => r !== null)
  console.log("rows size", rows.size())
  console.log("rows", rows.map(JSON.stringify).join(";"))
  console.log("")
	const tmpFilePath = tmp.tmpNameSync()
  generateCsv(tmpFilePath, rows)
  console.log(fs.readFileSync(tmpFilePath, {encoding: 'UTF-8', flag: 'r'}))
  res.download(tmpFilePath, 'filename.xml', (err) => {
    if (err) {
      console.log("ERROR OCCURRED")
    } else {
      console.log("ALLES GUT")
    }
  })
  // fs.unlinkSync(tmpFilePath)
});


module.exports = router;
