"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PortfolioAssetsJoins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      portfolioId: {
        type: Sequelize.INTEGER,
        references: { model: "Portfolios" },
      },
      assetId: {
        type: Sequelize.INTEGER,
        references: { model: "Assets" },
      },
      quantityOfAsset: {
        type: Sequelize.DECIMAL,
      },
      costAvg: {
        type: Sequelize.DECIMAL,
      },
      history: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
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
    return queryInterface.dropTable("PortfolioAssetsJoins");
  },
};
