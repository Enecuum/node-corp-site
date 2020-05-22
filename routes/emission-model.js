var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	let link = res.locals.guidesLink + res.locals.emissionModel;
   	res.redirect(301, link);
});

module.exports = router;
