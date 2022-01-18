'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restore_password',
      {
        restore_password_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          references : {
            model : 'user',
            key   : 'user_id',
          },
          allowNull: false
        },
        token: {
          type: Sequelize.STRING(128),
          required: true
        },
        used: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        expires_at: {
          type: Sequelize.STRING(128),
          required: true
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()'),
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()'),
          allowNull: false,
        },
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('restore_password');
  }
};
