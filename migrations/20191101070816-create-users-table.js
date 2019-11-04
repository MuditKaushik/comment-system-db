'use strict';
var sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable({ tableName: 'users' },
      {
        userid: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        middleName: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date().toISOString()
        },
        updateDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date().toISOString()
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('users')
  }
};
