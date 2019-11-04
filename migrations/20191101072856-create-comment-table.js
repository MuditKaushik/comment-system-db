'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable({ tableName: 'comments' }, {
      commentid: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      userid: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'userid'
        },
        allowNull: false
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parentid: {
        type: Sequelize.UUID,
        allowNull: true,
        defaultValue: null
      },
      createdate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedate: {
        type: Sequelize.DATE,
        allowNull: false
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
    return queryInterface.dropTable('comments', {
      cascade: true
    });
  }
};
