const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection');

// create our Restaurant model
class Restaurant extends Model {}

// create fields/columns for Restaurant model
Restaurant.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img_url: {
        type: DataTypes.STRING,
        defaultValue:"https://github.com/Loosekonnection/believe/blob/main/img/Tomatoes.JPG",
        allowNull: true, 
      },
    },
    {
      sequelize,
      freezeTableName: true,
      timestamps: false,
      underscored: true,
      modelName: 'restaurant'
    }
  );

  module.exports = Restaurant;