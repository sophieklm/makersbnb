const userController = require('../controllers').user;
const spaceController = require('../controllers').space;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: "Welcome to the nodemonbnb",
  }));

  app.get('/users/new', (req, res) => res.status(200).send( {
    message: "captures new users"
  }));

  app.post('/users/new', userController.create);

  app.get('/spaces', (req, res) => res.status(200).send( {
    message: "displays spaces available"
  }));

  app.get('/spaces/new', function(req, res) {
    req.render('newspace.ejs');
  });

  // app.post('/spaces/new', spaceController.create);

};
