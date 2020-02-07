var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let targetResource = 'technology';
  if (req.baseUrl !== '/' + targetResource) {
    res.redirect(301, '/' + targetResource);
  } else {
  	res.render(targetResource, { title: 'Express' });
  }
});

module.exports = router;
