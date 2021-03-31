'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrders extends Model {};
  ProductOrders.init({
    quantidade: DataTypes.DECIMAL,
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductOrders',
  });
  return ProductOrders;
};