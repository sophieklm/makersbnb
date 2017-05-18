const userController = require('../controllers').user;
const spaceController = require('../controllers').space;

module.exports = (app) => {
  app.get('/', function(req, res) {
      res.render('index.ejs');
  });

  app.post('/users/new', function(req, res) {
    userController.create;
    res.redirect('/');
  });

  app.get('/spaces', (req, res) => res.status(200).send( {
    message: "displays spaces available",
  }));

  app.get('/spaces/new', function(req, res) {
    res.render('newspace.ejs');
  });

  app.post('/spaces/new', function(req, res) {
    spaceController.create;
    res.redirect('/spaces');

  }); 


};
