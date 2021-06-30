'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    link: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    spot_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Review, { foreignKey: 'review_id' })
    Image.belongsTo(models.User, { foreignKey: 'user_id' })
    Image.belongsTo(models.Spot, { foreignKey: 'spot_id' })
  };
  return Image;
};
