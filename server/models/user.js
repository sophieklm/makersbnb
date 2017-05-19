'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  // }, {
  //   classMethods: {
  //     associate: (models) => {
  //       User.hasMany(models.Space, {
  //         foreignKey: 'userId',
  //         as: 'spaces',
  //       });
  //     },
  //   },
  });
  return User;
};
