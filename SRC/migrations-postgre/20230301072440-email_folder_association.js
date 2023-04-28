'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context:queryInterface}) {
    await queryInterface.createTable('email_folderAssociation', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      folder_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'folder',
          key: 'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
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

  async down({context: queryInterface}) {
    await queryInterface.dropTable('email_folderAssociation');
  }
};
