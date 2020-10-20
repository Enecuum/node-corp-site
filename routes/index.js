var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.baseUrl !== '') {
    res.redirect(301, '/');
  } else {
  	res.render('presentation', { title: 'Express' });
  }  
});

module.exports = router;
