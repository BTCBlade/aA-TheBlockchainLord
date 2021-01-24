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
      symbol: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(8),
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(64),
      },
      assetDetails: {
        type: Sequelize.JSON,
      },
      assetCategories: {
        type: Sequelize.ARRAY(Sequelize.STRING(64)),
      },
      backupUSDPrice: {
        type: Sequelize.NUMERIC(8, 2),
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
