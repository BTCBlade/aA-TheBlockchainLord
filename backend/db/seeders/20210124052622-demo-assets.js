"use strict";
const fetch = require("node-fetch");

const { apiKeys } = require("../../config");
const { coinmarketcapKey } = apiKeys;

const seederAssetsArray = async () => {
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD",
    {
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": coinmarketcapKey,
      },
    }
  );
  const data = await response.json();
  const dataStep1 = data.data.map((ele) => {
    return {
      cmcId: ele.id,
      name: ele.name,
      symbol: ele.symbol,
      tags: ele.tags,
      quote: JSON.stringify(ele.quote),
    };
  });
  const dataStep2 = dataStep1.map(async (ele) => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${ele.cmcId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": coinmarketcapKey,
        },
      }
    );
    const data = await response.json();
    const description = { description: data.data[ele.cmcId] };
    return Object.assign(ele, description);
  });
  return dataStep2;
};

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
