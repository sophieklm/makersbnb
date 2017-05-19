const userController = require('../controllers').user;
const spaceController = require('../controllers').space;

module.exports = (app) => {
  app.get('/', function(req, res) {
      res.render('index.ejs');
  });

  // app.post('/users/new', function  (req, res){
  //   userController.create(req, res);
  //   res.redirect('/');
  // });

  app.get('/spaces', spaceController.retrieve);

  app.get('/spaces/new', function (req, res) {
    res.render('spaces/new.ejs');
  });

  app.post('/spaces/new', spaceController.create);

};
