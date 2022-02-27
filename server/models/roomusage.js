'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roomUsage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roomUsage.belongsTo(models.client,{foreignKey:'clientId'})
      roomUsage.belongsTo(models.room,{foreignKey:'roomId'})
    }
  }
  roomUsage.init({
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    bookingDate: DataTypes.DATE,
    quotaUsed: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roomUsage',
  });
  return roomUsage;
};