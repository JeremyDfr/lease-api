'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contract.belongsTo(models.property, {
        foreignKey: 'property_id',
        as: 'property',
      })

      Contract.belongsTo(models.payment, {
        foreignKey: 'payment_id',
        as: 'payment',
      })
    }
  }
  Contract.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    payment_date: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};