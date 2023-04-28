'use strict';
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up ({ context:queryInterface}) {
    await queryInterface.sequelize.query(
      "CREATE TYPE recipient_type AS ENUM ('to', 'cc', 'bcc');"
    )
    await queryInterface.createTable('reciepents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull:false,
        type: "recipient_type",
      },
      email_adress: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('reciepents');
  }
};
