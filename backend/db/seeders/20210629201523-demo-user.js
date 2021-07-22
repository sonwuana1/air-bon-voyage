'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        first_name: 'Demo',
        last_name: 'Lition',
        description: 'I AM A DEMO USER!!!',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        first_name: 'Fake_User_1',
        last_name: 'Demo1',
        description: 'I love to travel!',
        hashedPassword: bcrypt.hashSync('password2'),
      },
      {
        email: faker.internet.email(),
        first_name: 'Fake_User_2',
        last_name: 'Demo2',
        hashedPassword: bcrypt.hashSync('password3'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      last_name: { [Op.in]: ['Lition', 'Demo1', 'Demo2'] }
    }, {});
  }
};
