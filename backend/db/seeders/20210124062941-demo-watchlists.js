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
    return queryInterface.bulkInsert("Watchlists", [
      {
        name: "Watch of Demo-lition",
        description: "Top 3 market cap crypto watchlist",
        userId: 1,
      },
      {
        name: "Watchlist of UserId 2",
        description: "Just polkadot",
        userId: 2,
      },
      {
        name: "Watchlist of UserId 3",
        description: "Coldest Watchlist of all time",
        userId: 3,
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
    return queryInterface.bulkDelete("Watchlists", null, {});
  },
};
