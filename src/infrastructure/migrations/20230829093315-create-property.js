'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      owner_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Owners',
          key: 'id',
          as: 'owner_id',
        }
      },
      tenant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tenants',
          key: 'id',
          as: 'tenant_id',
        }
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.INTEGER
      },
      surface: {
        type: Sequelize.INTEGER
      },
      pieces: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      availability: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Properties');
  }
};