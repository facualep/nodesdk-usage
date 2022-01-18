'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user',
      {
        user_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING(128),
          required: true
        },
        first_name: {
          type: Sequelize.STRING(128),
          required: true
        },
        last_name: {
          type: Sequelize.STRING(128),
          required: true
        },
        password: {
          type: Sequelize.STRING(128),
          required: false
        },
        phone: {
          type: Sequelize.STRING(128),
          required: false
        },
        birthdate: {
          type: Sequelize.DATE,
          required: false
        },
        country: {
          type: Sequelize.STRING(128),
          required: false
        },
        city: {
          type: Sequelize.STRING(128),
          required: false
        },
        address: {
          type: Sequelize.STRING(128),
          required: false
        },
        email_is_verified: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        verify_email_token: {
          type: Sequelize.STRING(256),
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
        deleted_at: {
          type: Sequelize.DATE,
          defaultValue: null,
        },
      })
      .then(() => {
        return [
          queryInterface.addIndex('user', ['user_id'], {
            indexName: 'index_user_on_id',
            indicesType: 'UNIQUE',
          }),
        ];
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
