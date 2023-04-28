'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up ({ context:queryInterface}) {
    await queryInterface.createTable('attachement', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      file_name: {
        type: Sequelize.STRING
      },
      file_type: {
        type: Sequelize.STRING
      },
      file_size: {
        type: Sequelize.STRING
      },
      file_path: {
        type: Sequelize.TEXT
      },
      email_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'email',
          key: 'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('attachement');
  }
};
