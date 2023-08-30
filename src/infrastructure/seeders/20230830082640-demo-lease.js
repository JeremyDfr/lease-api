'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // TODO: Improve dynamic data generation

    // Owners
    await queryInterface.bulkInsert('Owners', [
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@email.fr',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'janedoe@email.fr',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])

    // Tenants
    await queryInterface.bulkInsert('Tenants', [
      {
        firstname: 'JohnTenant',
        lastname: 'DoeTenant',
        email: 'johndoe@email.fr',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'JaneTenant',
        lastname: 'DoeTenant',
        email: 'janedoe@email.fr',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])

    // Properties
    await queryInterface.bulkInsert('Properties', [
      {
        owner_id: 1,
        tenant_id: 1,
        address: '1 rue de la paix',
        city: 'Paris',
        code: '75000',
        type: 1,
        surface: 100,
        pieces: 5,
        description: 'Une maison de 100m2',
        price: 100000,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        owner_id: 1,
        tenant_id: null,
        address: '2 rue de la paix',
        city: 'Paris',
        code: '75000',
        type: 1,
        surface: 100,
        pieces: 5,
        description: 'Une maison de 100m2',
        price: 500,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        owner_id: 2,
        tenant_id: null,
        address: '3 rue de la paix',
        city: 'Paris',
        code: '75000',
        type: 2,
        surface: 100,
        pieces: 5,
        description: 'Une maison de 100m2',
        price: 100000,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])

    // Contracts
    await queryInterface.bulkInsert('Contracts', [
      {
        property_id: 1,
        start_date: '2021-08-30',
        end_date: '2022-08-30',
        payment_date: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])

    // Payments
    await queryInterface.bulkInsert('Payments', [
      {
        contract_id: 1,
        date: '2021-08-30',
        amount: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contract_id: 1,
        date: '2021-09-30',
        amount: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Owners', null, {});
    await queryInterface.bulkDelete('Tenants', null, {});
    await queryInterface.bulkDelete('Properties', null, {});
    await queryInterface.bulkDelete('Contracts', null, {});
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
