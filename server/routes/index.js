const userController = require('../controllers').user;
const spaceController = require('../controllers').space;

module.exports = (app, passport) => {
  app.get('/', function(req, res) {
      res.render('index.ejs');
  });

  app.post('/users/new', userController.create);

  app.get('/spaces', spaceController.retrieve);

  app.get('/spaces/new', function (req, res) {
    res.render('spaces/new.ejs');
  });

  app.post('/spaces/new', spaceController.create);

  app.get('/login', function(req, res){
    res.render('login.ejs');
  });

   // app.post('/login', do all our passport stuff here);

   app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};
