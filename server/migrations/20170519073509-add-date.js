'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
  queryInterface.addColumn('Spaces', 'available', Sequelize.DATE),
    down: (queryInterface, Sequelize) => queryInterface.removeColumn('Spaces', 'available'),
  };
