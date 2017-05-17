space.js

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Space = sequelize.define('Space', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Space.belongsTo(models.User,{
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Space;
};
