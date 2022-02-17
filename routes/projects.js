var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('dsfsdf')
  res.render('projects', { title: 'Express' });
});

module.exports = router;
