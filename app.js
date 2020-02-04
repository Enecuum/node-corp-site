var createError = require('http-errors');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var i18n = require("i18n");

const hbs = require("hbs");
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var promoRouter = require('./routes/promo');
var missionAndPurposeRouter = require('./routes/mission-and-purpose');
var documentationRouter = require('./routes/documentation');
var teamRouter = require('./routes/team');
var roadmapRouter = require('./routes/roadmap');
var partnersRouter = require('./routes/partners');
var newsAndCommunityRouter = require('./routes/news-and-community');
var marketSratsRouter = require('./routes/market-stats');
var networkStatsRouter = require('./routes/network-stats');
var buyRouter = require('./routes/buy');
var earnRouter = require('./routes/earn');
var holdRouter = require('./routes/hold');
var utilityRouter = require('./routes/utility');
var spendRouter = require('./routes/spend');
var emissionModelRouter = require('./routes/emission-model');
var technologyRouter = require('./routes/technology');
var allowedLocales = ['en', 'ru', 'tr', 'es', 'pt', 'sp']; //sp - uncorrect value for es (spanish)

i18n.configure({
    locales: allowedLocales,
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
	let downloadAndroidAppLinks = {
		byUtmSource: {
			yandex: {
				masternode: 'http://app.enecuum.com/?utm_source=yandex',
				googlePlay: 'https://enecuum.page.link/8fVd'
			},
			google: {
				masternode: 'http://app.enecuum.com/?utm_source=google',
				googlePlay: 'https://enecuum.page.link/2MoZ'
			},
			social: {
				masternode: 'http://app.enecuum.com/?utm_source=social',
				googlePlay: 'https://enecuum.page.link/M3Eb'
			},
			uzmancoin: {
				masternode: 'https://app.enecuum.com/?utm_source=uzmancoin',
				googlePlay: 'https://enecuum.page.link/hg69'
			}
		},
		defaultUtmSource: {
			masternode: 'https://app.enecuum.com?utm_source=unknown',
			googlePlay: 'https://play.google.com/store/apps/details?id=com.enecuum.wallet&utm_source=unknown'
		},
		defaultNoUtm: {
			masternode: 'https://app.enecuum.com',
			googlePlay: 'https://play.google.com/store/apps/details?id=com.enecuum.wallet'
		}
	};
	if (req.path.indexOf('promo') !== -1) {
		res.locals.enecuumAppLink = (req.query.utm_source !== undefined && downloadAndroidAppLinks.byUtmSource.hasOwnProperty(req.query.utm_source)) ? downloadAndroidAppLinks.byUtmSource[req.query.utm_source] : downloadAndroidAppLinks.defaultUtmSource;
	} else {
		res.locals.enecuumAppLink = downloadAndroidAppLinks.defaultNoUtm;
	}
	next();
});

app.use(function (req, res, next) {
	let currentLang = 'en';
	let flag = {
		en: 'gb',
		ru: 'ru',
		tr: 'tr',
		es: 'es',
		pt: 'pt'
	};

	if (req.query.lang !== undefined && allowedLocales.indexOf(req.query.lang) !== -1) {
		if (req.query.lang === 'sp') {
			req.query.lang = 'es';
		}
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
	}

	if (allowedLocales.indexOf(currentLang) > 1 && req.path !== '/promo') {
		currentLang = 'en';
	}

	res.locals.currentFlag = flag[currentLang];
	res.locals.currentLang = currentLang;

	if (currentLang === 'ru') {
		res.locals.mobileImpactArticleLink = 'https://hub.forklog.com/vliyanie-mobilnogo-majninga-na-batareyu-ustrojstva-sravnitelnyj-analiz-uplexa-mib-i-enecuum/';
		res.locals.guidesLink = 'https://guides.enecuum.com/ru';
	} else {
		res.locals.mobileImpactArticleLink = 'https://medium.com/@ENQBlockchain/smartphone-mining-on-battery-myth-or-reality-comparing-uplexa-mib-and-enecuum-bc0abc1e40e6';
		res.locals.guidesLink = 'https://guides.enecuum.com';
	}

	res.setLocale(currentLang);
	next();
});

app.use('/{0,}', indexRouter);
app.use('/index.html', indexRouter);
app.use('/promo/{0,}', promoRouter);
app.use(['/mission-and-purpose/{0,}', '/Mission%20and%20purpose.html/{0,}'], missionAndPurposeRouter);
app.use(['/documentation/{0,}', '/Documentation.html/{0,}'], documentationRouter);
app.use(['/team/{0,}', '/Team.html/{0,}'], teamRouter);
app.use(['/market-stats/{0,}', '/Marketstats.html/{0,}'], marketSratsRouter);
app.use(['/network-stats/{0,}', '/Networkstats.html/{0,}'], networkStatsRouter);
app.use(['/roadmap/{0,}', '/Roadmap.html/{0,}'], roadmapRouter);
app.use(['/partners/{0,}', '/Partners.html/{0,}'], partnersRouter);
app.use(['/news-and-community/{0,}', '/NewsAndCommunity.html/{0,}'], newsAndCommunityRouter);
app.use(['/buy/{0,}', '/Buy.html/{0,}'], buyRouter);
app.use(['/earn/{0,}', '/Earn.html/{0,}'], earnRouter);
app.use(['/hold/{0,}', '/Hold.html/{0,}'], holdRouter);
app.use(['/spend/{0,}', '/Spend.html/{0,}'], spendRouter);
app.use(['/utility/{0,}', '/Utility.html/{0,}'], utilityRouter);
app.use(['/emission-model/{0,}', '/Emission%20model.html/{0,}'], emissionModelRouter);
app.use(['/technology/{0,}', '/Technology.html/{0,}'], technologyRouter);

app.use(function (req, res, next) {
	if ('/robots.txt' === req.url) {
		res.type('text/plain');
		res.sendFile(__dirname + '/public/robots.txt');
	} else {
		next();
	}
});
app.use(function (req, res, next) {
	if ('/sitemap.xml' === req.url) {
		res.sendFile(__dirname + '/public/sitemap.xml');
	} else {
		next();
	}
});
app.use(function (req, res, next) {
	if (req.url.indexOf('/privacy.pdf') !== -1) {
		res.sendFile(__dirname + '/assets/pdf/privacy.pdf');
	} else {
		next();
	}
});
app.use(function (req, res, next) {
	if (req.url.indexOf('/terms.pdf') !== -1) {
		res.sendFile(__dirname + '/assets/pdf/terms.pdf');
	} else {
		next();
	}
});
app.use(function (req, res, next) {
	if (req.url.indexOf('/tp_en.pdf') !== -1) {
		res.sendFile(__dirname + '/assets/pdf/tp_en.pdf');
	} else {
		next();
	}
});
app.use(function (req, res, next) {
	if (req.url.indexOf('/pp_en.pdf') !== -1) {
		res.sendFile(__dirname + '/assets/pdf/pp_en.pdf');
	} else {
		next();
	}
});

hbs.registerHelper('__', function () {
  return i18n.__.apply(this, arguments);
});

hbs.registerHelper('if_eq', function(a, b, opts) {
	if (a === b) {
		return opts.fn(this);
	} else {
		return opts.inverse(this);
	}
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
  res.render('error', { errorCode: res.statusCode});
});

module.exports = app;
