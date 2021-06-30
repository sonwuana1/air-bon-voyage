'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    gps: DataTypes.ENUM,
    price: DataTypes.DECIMAL,
    num_of_guests: DataTypes.INTEGER,
    num_of_beds: DataTypes.INTEGER,
    num_of_baths: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.hasMany(models.Booking, { foreignKey: 'spot_id' })
    Spot.hasMany(models.Review, { foreignKey: 'spot_id' })
    Spot.hasMany(models.Image, { foreignKey: 'spot_id' })
  };
  return Spot;
};
