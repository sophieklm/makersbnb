const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false }));

app.set('view engine', 'ejs');

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send( {
  message: "Welcome to NodemonBnB!"
}));

module.exports = app;
