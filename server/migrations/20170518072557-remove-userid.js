'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Spaces', 'userId');
  },
    down: (queryInterface, Sequelize) => queryInterface.addColumn(
      'Spaces',
      'userId',
      {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      }),
};
