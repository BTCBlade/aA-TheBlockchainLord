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
      },
      {
        portfolioId: 1,
        assetId: 2,
      },
      {
        portfolioId: 1,
        assetId: 2,
      },
      { portfolioId: 2, assetId: 3 },
      { portfolioId: 2, assetId: 4 },
      { portfolioId: 3, assetId: 2 },
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
