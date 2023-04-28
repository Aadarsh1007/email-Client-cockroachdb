'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up ({ context:queryInterface}) {
    await queryInterface.sequelize.query(
      "CREATE TYPE email_sync_state AS ENUM ('standby','fetching','fetched')"
    )
    await queryInterface.createTable('folder', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      folder_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      provider_id: {
        type: Sequelize.STRING
      },
      preference:{
        type: Sequelize.STRING
      },
      next_page_token: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sync_state:{
        type : "email_sync_state",
        allowNull:true,
        defaultValue : 'standby'
      }
    });
  },

  async down ({context: queryInterface}) {
    await queryInterface.dropTable('folder');
  }
};