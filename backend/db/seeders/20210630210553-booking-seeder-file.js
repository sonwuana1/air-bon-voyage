'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [{
      start_date: new Date('2021-07-15'),
      end_date: new Date('2021-07-20'),
      user_id: 1,
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      start_date: new Date('2021-07-20'),
      end_date: new Date('2021-07-22'),
      user_id: 1,
      spot_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      start_date: new Date('2021-08-06'),
      end_date: new Date('2021-08-09'),
      user_id: 2,
      spot_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      start_date: new Date('2021-08-12'),
      end_date: new Date('2021-08-16'),
      user_id: 3,
      spot_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      start_date: new Date('2021-07-26'),
      end_date: new Date('2021-07-30'),
      user_id: 1,
      spot_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      start_date: new Date('2021-12-01'),
      end_date: new Date('2021-12-04'),
      user_id: 2,
      spot_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      start_date: new Date('2021-10-01'),
      end_date: new Date('2021-10-04'),
      user_id: 3,
      spot_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
