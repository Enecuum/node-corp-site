var express = require('express');
var router = express.Router();
var roadmapModel = require('./../config/roadmap')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let targetResource = 'roadmap';
  if (req.baseUrl !== '/' + targetResource) {
    res.redirect(301, '/' + targetResource);
  } else {
  	res.render(targetResource, { title: 'Express', roadmapModel : roadmapModel });
  }
});

module.exports = router;
