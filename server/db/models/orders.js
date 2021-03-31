'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Orders.belongsToMany(models.Products, { 
        through: 'ProductOrders', 
        foreignKey: 'product_id'
      });

      Orders.belongsTo(models.Users, { 
        foreignKey : 'user_id'
       });
    }
  };
  Orders.init({
    address: DataTypes.STRING,
    client: DataTypes.STRING,
    table: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};