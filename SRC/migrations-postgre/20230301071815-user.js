'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up ({ context:queryInterface}) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email_id: {
        unique:true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      contact_details: {
        type: Sequelize.INTEGER
      },
      access_token:{
        type: Sequelize.TEXT
      },
      refresh_token:{
        type: Sequelize.TEXT
      },
      created_at:{
        type: Sequelize.DATE(6),
        // allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      token_update_at:{
        type: Sequelize.DATE,
        // allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      // dob: {
      //   type: Sequelize.DATE
      // },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      next_page_token:{
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down ({context: queryInterface}) {
    await queryInterface.dropTable('users');
  }
};
