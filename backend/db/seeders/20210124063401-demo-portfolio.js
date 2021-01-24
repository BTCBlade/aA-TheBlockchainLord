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
    return queryInterface.bulkInsert("Portfolios", [
      {
        name: "Portfolio 1 assetId 1 to 3",
        createdByUserId: 1,
        followedByUsers: [2],
      },
      {
        name: "Portfolio 2 USDT and Polkadot",
        createdByUserId: 2,
        followedByUsers: [3],
      },
      {
        name: "Portfolio 3 ETH Hoarder",
        createdByUserId: 3,
        followedByUsers: [1, 2],
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
    return queryInterface.bulkDelete("Portfolios", null, {});
  },
};
