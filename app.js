const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));

// required for passport
app.use(session({ secret: 'super_secret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.set('view engine', 'ejs');

require('./server/routes')(app, passport);
app.get('*', (req, res) => res.status(200).send( {
  message: "Welcome to NodemonBnB!"
}));

module.exports = app;
