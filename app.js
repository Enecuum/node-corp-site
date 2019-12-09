var createError = require('http-errors');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var i18n = require("i18n");

const hbs = require("hbs");
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var missionAndPurposeRouter = require('./routes/mission');
var documentationRouter = require('./routes/documentation');
var teamRouter = require('./routes/team');
var roadmapRouter = require('./routes/roadmap');
var partnersRouter = require('./routes/partners');
var newsAndCommunityRouter = require('./routes/newsAndCommunity');
var marketSratsRouter = require('./routes/marketstats');
var networkStatsRouter = require('./routes/networkstats');
var buyRouter = require('./routes/buy');
var earnRouter = require('./routes/earn');
var holdRouter = require('./routes/hold');
var utilityRouter = require('./routes/utility');
var spendRouter = require('./routes/spend');
var emissionModelRouter = require('./routes/emissionModel');
var technologyRouter = require('./routes/technology');
var allowedLocales = ['en', 'ru'];

i18n.configure({
    locales: ['en', 'ru'],
    register: global,
    directory: __dirname + '/locales',
    fallbacks:{'ru': 'en'},
    queryParameter: 'lang',
    objectNotation: true,
    autoReload: false,
    updateFiles: false,
    syncFiles: false
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(cookieParser());
app.use(i18n.init);

app.use(function (req, res, next) {
	let currentLang = null;
	let flag = {
		en: 'gb',
		ru: 'ru'
	}

	if (req.query.lang !== undefined && allowedLocales.indexOf(req.query.lang) !== -1) {
		currentLang = req.query.lang;
		res.cookie('preferredLocale', currentLang, { maxAge: 3600000*24*365*10, httpOnly: true });				
	} else if (req.cookies.preferredLocale !== undefined && allowedLocales.indexOf(req.cookies.preferredLocale) !== -1) {
		currentLang = req.cookies.preferredLocale;
	} else if (req.acceptsLanguages() !== false) {
		for (let i = 0; i < req.acceptsLanguages().length; i++) {
			if (allowedLocales.indexOf(req.acceptsLanguages()[i]) !== -1) {
				currentLang =  req.acceptsLanguages()[i];
				break;
			}
		}
	} else {
		currentLang = 'en';
	}

	res.locals.currentFlag = flag[currentLang];
	res.setLocale(currentLang);
	next();
});

app.use('/', indexRouter);
app.use('/mission', missionAndPurposeRouter);
app.use('/documentation', documentationRouter);
app.use('/team', teamRouter);
app.use('/marketstats', marketSratsRouter);
app.use('/networkstats', networkStatsRouter);
app.use('/roadmap', roadmapRouter);
app.use('/partners', partnersRouter);
app.use('/newsAndCommunity', newsAndCommunityRouter);
app.use('/buy', buyRouter);
app.use('/earn', earnRouter);
app.use('/hold', holdRouter);
app.use('/spend', spendRouter);
app.use('/utility', utilityRouter);
app.use('/emissionModel', emissionModelRouter);
app.use('/technology', technologyRouter);

hbs.registerHelper('__', function () {
  return i18n.__.apply(this, arguments);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;