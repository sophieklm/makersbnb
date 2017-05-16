const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: "Welcome to the nodemonbnb",
  }));

  app.post('/user/new', userController.create);
};
