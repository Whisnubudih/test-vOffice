'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roomUsages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bookingDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      quotaUsed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rooms',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
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
    await queryInterface.dropTable('roomUsages');
  }
};