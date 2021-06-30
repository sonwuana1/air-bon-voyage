'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link: {
        allowNull: false,
        type: Sequelize.STRING(1234)
      },
      user_id: {
        references: { model: 'Users' },
        type: Sequelize.INTEGER
      },
      spot_id: {
        references: { model: 'Spots' },
        type: Sequelize.INTEGER
      },
      review_id: {
        references: { model: 'Reviews' },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};
