const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const moment = require('moment');
const session = require('express-session');
const SessionFileStore = require('session-file-store')(session);
const app = express();

const Routers = require('./controllers/router');
const Models = require('./models/index');

app.use(bodyParser.json({
	limit: '50mb',
}));

app.use(bodyParser.urlencoded({
	extended: true,
}));

app.use(session({
	secret: "3C5138C75B902D3B4D2296FD5DF8D6E3B4F4319E2D33A301618263DDCA7EB05A",
	cookie: {
		secure: 'auto',
	},
	resave: false,
	saveUninitialized: true,
	store: new SessionFileStore({
		path: './data/sessions',
	})
}));

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.locals.moment = moment;

Models.sequelize.sync().then(() => {
	app.get('/', (req, res) => {
		res.render('home', {

		});
	});

	app.use('/', Routers);

	app.get('/dashboard', async (req, res) => {
		res.render('dashboard', {

		})
	});

	app.get('/logout', (req, res) => {
		req.session.destroy(() => {
			res.redirect('/');
		});
	});

	app.use('/css', express.static('./css'));
	app.use('/img', express.static('./img'));
	app.use('/fonts', express.static('./fonts'));
	app.use('/build', express.static('./build'));

	app.use((req, res, next) => {
		res.status(404).render('404', {});
	});

	app.listen(8069, () => {
		console.log("Server started");
	});
});
