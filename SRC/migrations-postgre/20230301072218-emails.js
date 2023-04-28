'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up ({ context:queryInterface}) {
    await queryInterface.createTable('email', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.TEXT
      },
      subject: {
        type: Sequelize.TEXT
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          onDelete:'CASCADE'
        }
      },
      message_id: {
        type: Sequelize.INTEGER
      },
      is_repliedto: {
        type: Sequelize.INTEGER
      },
      scheduled_at: {
        type: Sequelize.TEXT
      },
      snippet: {
        type: Sequelize.TEXT
      },
      is_archived: {
        type: Sequelize.BOOLEAN,
        default: 0
      },
      is_read: {
        type: Sequelize.BOOLEAN,
        default: 0
      },
      is_thread: {
        type: Sequelize.BOOLEAN,
        default: 0
      },
      thread_id: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down ({context: queryInterface}) {
    await queryInterface.dropTable('email');
  }
};
