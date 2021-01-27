"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Assets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cmcId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(64),
      },
      symbol: {
        allowNull: false,
        type: Sequelize.STRING(8),
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING(64)),
      },
      quote: {
        type: Sequelize.JSON,
      },
      assetDetails: {
        type: Sequelize.JSON,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Assets");
  },
};
