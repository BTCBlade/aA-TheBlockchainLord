"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("PortfolioAssetsJoins", [
      {
        portfolioId: 1,
        assetId: 1,
        quantityOfAsset: 1.524356,
      },
      {
        portfolioId: 1,
        assetId: 2,
        quantityOfAsset: 52.81,
      },
      {
        portfolioId: 1,
        assetId: 2,
        quantityOfAsset: 1.241231455566,
      },
      { portfolioId: 2, assetId: 3, quantityOfAsset: 512313141.11 },
      { portfolioId: 2, assetId: 4, quantityOfAsset: 42 },
      { portfolioId: 3, assetId: 2, quantityOfAsset: 8.5 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("PortfolioAssetsJoins", null, {});
  },
};
