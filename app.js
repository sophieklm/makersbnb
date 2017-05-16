const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded( { extended: false }));

app.get('/', (req, res) => res.status(200).send( {
  message: "Welcome to NodemonBnB!"
}));

app.get('/users/new', (req, res) => res.status(200).send( {
  message: "captures new users"
}));

app.post('/users/new', (req, res) => res.status(200).send( {
  //Will redirect to /
}));

app.get('/spaces', (req, res) => res.status(200).send( {
  message: "displays spaces available"
}));

app.get('/spaces/new', (req, res) => res.status(200).send( {
  message: "user interface to add a space"
}));

app.post('/spaces/new', (req, res) => res.status(200).send( {
  // Will redirect this to /spaces
}));

module.exports = app;
