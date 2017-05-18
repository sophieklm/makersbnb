const Space = require('../models').Space;

module.exports = {
  create(req, res) {
    return Space
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      })
      .then(space => res.status(201).send(space))
      .catch(error => res.status(400).send(error));
  },
};
