const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: "Welcome to the nodemonbnb",
  }));

  app.get('/users/new', function(req, res) {
      res.render('signup.ejs');
  });

  app.post('/users/new', userController.create);

  app.get('/spaces', (req, res) => res.status(200).send( {
    message: "displays spaces available"
  }));

  app.get('/spaces/new', (req, res) => res.status(200).send( {
    message: "user interface to add a space"
  }));

  app.post('/spaces/new', (req, res) => res.status(200).send( {
    // Will redirect this to /spaces
  }));

};
