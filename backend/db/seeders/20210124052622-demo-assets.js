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
    return queryInterface.bulkInsert("Assets", [
      {
        symbol: "BTC",
        fullName: "Bitcoin",
        assetDetails: JSON.stringify({ foundedBy: "satoshi", genesis: "2008" }),
        assetCategories: ["Proof of Work", "Blockchain", "Crypto"],
        backupUSDPrice: 32000.42,
      },
      {
        symbol: "ETH",
        fullName: "Ethereum",
        assetDetails: JSON.stringify({ foundedBy: "Vitalik", genesis: "2014" }),
        assetCategories: [
          "Proof of State",
          "Blockchain",
          "Crypto",
          "Smart Contracts",
        ],
        backupUSDPrice: 1310.42,
      },
      {
        symbol: "USDT",
        fullName: "Tether",
        assetDetails: JSON.stringify({
          foundedBy: "Hong Kong Tether",
          genesis: "2014",
        }),
        assetCategories: ["Stablecoin", "Blockchain", "Crypto"],
        backupUSDPrice: 1.0,
      },
      {
        symbol: "DOT",
        fullName: "Polkadot",
        assetDetails: JSON.stringify({
          foundedBy: "Web3 Foundation",
          genesis: "2018",
        }),
        assetCategories: ["Stablecoin", "Blockchain", "Crypto"],
        backupUSDPrice: 18.42,
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
    return queryInterface.bulkDelete("Assets", null, {});
  },
};
