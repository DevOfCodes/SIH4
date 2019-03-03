//jshint esversion:6

var express = require('express');
var app = express();
var router = express.Router();

const project = require('./routes/project');

app.use('/api/project', project);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
