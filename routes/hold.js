var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let targetResource = 'hold';
  if (req.baseUrl !== '/' + targetResource) {
    res.redirect('/' + targetResource);
  }
  res.render(targetResource, { title: 'Express' });
});

module.exports = router;
