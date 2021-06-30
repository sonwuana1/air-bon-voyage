'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [{
        rating: 5,
        content: 'Beautiful and spacious room with a gorgeous view of the city!',
        user_id: 1,
        spot_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 2,
        content: 'More bugs then I could count! Staff was nice though',
        user_id: 2,
        spot_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        content: 'Staff was very friendly and the room was very clean.',
        user_id: 3,
        spot_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        content: "Ehhh...i've had better",
        user_id: 1,
        spot_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
