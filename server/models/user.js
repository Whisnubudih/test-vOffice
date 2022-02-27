'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Name is required"},
        notEmpty: {msg :"Name is required"},

      }
    },
    email:{
      allowNull: false,
      unique: {msg :"Email must be unique"},
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Email is required"},
        notEmpty: {msg :"Email is required"},
        isEmail: {msg :"Invalid email format"},

      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Password is required"},
        notEmpty: {msg :"Password is required"},

      }
    },
  }, {
    sequelize,
    hooks:{
      beforeCreate: (instance,option) =>{
        let salt = bcrypt.genSaltSync(8)
        let hash = bcrypt.hashSync(instance.password,salt)

        instance.password = hash
      }

    },
    modelName: 'user',
  });
  return user;
};