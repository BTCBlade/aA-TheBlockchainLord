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

      ******** history array [{Date.parse("dateString"), quantity, purchasePrice} ]
    */
    return queryInterface.bulkInsert("PortfolioAssetsJoins", [
      {
        portfolioId: 1,
        assetId: 1,
        quantityOfAsset: 1.524356,
        costAvg: 12000,
        history: [
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 1.524356,
            purchasePrice: 12000,
          }),
        ],
      },
      {
        portfolioId: 1,
        assetId: 2,
        quantityOfAsset: 52.81,
        costAvg: 500,
        history: [
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 52.81,
            purchasePrice: 500,
          }),
        ],
      },
      {
        portfolioId: 1,
        assetId: 4,
        quantityOfAsset: 1000,
        costAvg: 5,
        history: [
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 250,
            purchasePrice: 2.5,
          }),
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 500,
            purchasePrice: 5,
          }),
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 250,
            purchasePrice: 7.5,
          }),
        ],
      },
      {
        portfolioId: 2,
        assetId: 3,
        quantityOfAsset: 512341.11,
        costAvg: 1,
        history: [
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 512341.11,
            purchasePrice: 1,
          }),
        ],
      },
      {
        portfolioId: 2,
        assetId: 4,
        quantityOfAsset: 42,
        costAvg: 15,
        history: [
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 42,
            purchasePrice: 15,
          }),
        ],
      },
      {
        portfolioId: 3,
        assetId: 2,
        quantityOfAsset: 8.5,
        costAvg: 1500,
        history: [
          JSON.stringify({
            date: Date.parse(new Date()),
            quantity: 8.5,
            purchasePrice: 1500,
          }),
        ],
      },
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
