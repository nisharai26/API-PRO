'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Vehicle.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    make: DataTypes.STRING,
    model:DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    
      
     
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    
      
    }


  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};