var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let targetResource = 'market-stats';
  if (req.baseUrl !== '/' + targetResource) {
    res.redirect('/' + targetResource);
  }

  res.render(targetResource, { title: 'Express', chartSeriesData: JSON.stringify(__('CHART_SERIES_TITLES'))});
});

module.exports = router;
