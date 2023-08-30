'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Owner, {
        foreignKey: 'owner_id',
        as: 'owner',
      })

      this.belongsTo(models.Tenant, {
        foreignKey: 'tenant_id',
        as: 'tenant',
      })

      this.hasMany(models.Contract, {
        foreignKey: 'property_id',
        as: 'contracts',
      })
    }
  }
  Property.init({
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    code: DataTypes.STRING,
    type: DataTypes.INTEGER,
    surface: DataTypes.INTEGER,
    pieces: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    availability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};