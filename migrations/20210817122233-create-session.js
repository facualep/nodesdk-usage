'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('session', {
      session_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references : {
          model : "user",
          key   : "user_id",
        },
        allowNull: true
      },
      token: {
        type: Sequelize.STRING, allowNull: false
      },
      device: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.STRING
      },
      messaging_token: {
        type: Sequelize.STRING
      },
      expires_at: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('session');
  }
};
