'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    spot_id: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Spot, { foreignKey: 'spot_id' })
    Review.belongsTo(models.User, { foreignKey: 'user_id' })
    Review.hasMany(models.Image, { foreignKey: 'review_id' })
  };
  return Review;
};
