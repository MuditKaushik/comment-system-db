'use strict';
var uuidv4 = require('uuid/v4');

var users = [
  {
    userid: uuidv4(),
    firstName: 'Tony',
    middleName: '',
    lastName: 'Stark',
    email: 'tony.stark@avenger.com',
    username: 'Ironman',
    password: 'test123',
    createdate: new Date().toISOString(),
    updatedate: new Date().toISOString()
  },
  {
    userid: uuidv4(),
    firstName: 'Thor',
    middleName: '',
    lastName: 'Odin Son',
    email: 'thor.odin_son@avenger.com',
    username: 'Thor',
    password: 'test123',
    createdate: new Date().toISOString(),
    updatedate: new Date().toISOString()
  },
  {
    userid: uuidv4(),
    firstName: 'Wade',
    middleName: 'Winston',
    lastName: 'Wilson',
    email: 'wade.wilson@avenger.com',
    username: 'DeadPool',
    password:'test123',
    createdate: new Date().toISOString(),
    updatedate: new Date().toISOString()
  },
  {
    userid: uuidv4(),
    firstName: 'Thanos',
    middleName: '',
    lastName: 'The mad titan',
    email: 'iaminevitable@avenger.com',
    username: 'Thanos',
    password:'test123',
    createdate: new Date().toISOString(),
    updatedate: new Date().toISOString()
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
