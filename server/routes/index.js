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

  app.get('/spaces', function(req, res) {
    res.render('spaces/index.ejs');
  });

  app.get('/spaces/new', function(req, res) {
    res.render('spaces/new.ejs');
  });

};
