const fs = require('fs')

const express = require('express');
const multer = require('multer')

const upload = multer({dest: '/tmp/ortalis'})

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Ortalis'});
});

router.post('/generateCsv', upload.array('files'), (req, res) => {
  const filePaths = _.map(req.files, file => file.path)
  const contents = _.map(filePaths, p = fs.readFileSync(p, {flag: 'r'}))


  res.send(req.files[0])
  // res.download(req.files[0].path, 'filename.xml')
});


module.exports = router;
