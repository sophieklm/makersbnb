const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/', function(req, res) {
      res.render('index.ejs');
  });

  app.get('/users/new', function(req, res) {
      res.render('signup.ejs');
  });

  app.post('/users/new', function(req, res) {
    userController.create;
    res.redirect('/');
  });

  app.get('/spaces', (req, res) => res.status(200).send( {
    message: "displays spaces available",
  }));

  app.get('/spaces/new', (req, res) => res.status(200).send( {
    message: "user interface to add a space",
  }));

  app.post('/spaces/new', (req, res) => res.status(200).send( {
    // Will redirect this to /spaces
  }));

};
