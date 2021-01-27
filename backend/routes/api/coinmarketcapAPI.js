const express = require("express");
const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

const db = require("../../db/models");
const router = express.Router();

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

//test
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD&logo&description&urls",
      {
        headers: {
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": coinmarketcapKey,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    res.send(data);
  })
);

//super seederfile test
router.get(
  "/seeder",
  asyncHandler(async (req, res) => {
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
    const dataStep1 = await Promise.all(
      data.data.map((ele) => {
        return {
          cmcId: ele.id,
          name: ele.name,
          symbol: ele.symbol,
          tags: ele.tags,
          quote: ele.quote,
        };
      })
    );
    const dataStep2 = await Promise.all(
      dataStep1.map(async (ele) => {
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
        const assetDetails = await {
          assetDetails: data.data[ele.cmcId],
        };

        const ret = await Object.assign(ele, assetDetails);

        return ret;
      })
    );

    res.send(dataStep2);
  })
);

module.exports = router;
