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
    return queryInterface.bulkInsert("WatchlistAssetsJoins", [
      { watchlistId: 1, assetId: 1 },
      { watchlistId: 1, assetId: 2 },
      { watchlistId: 1, assetId: 3 },
      { watchlistId: 2, assetId: 1 },
      { watchlistId: 2, assetId: 2 },
      { watchlistId: 3, assetId: 1 },
      { watchlistId: 3, assetId: 2 },
      { watchlistId: 3, assetId: 3 },
      { watchlistId: 4, assetId: 5 },
      { watchlistId: 4, assetId: 8 },
      { watchlistId: 4, assetId: 13 },
      { watchlistId: 4, assetId: 21 },
      { watchlistId: 4, assetId: 34 },
      { watchlistId: 4, assetId: 35 },
      { watchlistId: 4, assetId: 36 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("WatchlistAssetsJoins", null, {});
  },
};
