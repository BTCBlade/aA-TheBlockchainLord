const express = require("express");
const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

const db = require("../../db/models");
const router = express.Router();

const { apiKeys } = require("../../config");

const { coinmarketcapKey } = apiKeys;

//test
router.get(
  "/",
  asyncHandler(async (req, res) => {
    dataStep1.forEach((asset) => {
      asset.quote = JSON.stringify(asset.quote);
      asset.assetDetails = JSON.stringify(asset.assetDetails);
    });
    res.json(dataStep1);
  })
);

//super seederfile test
router.get(
  "/seeder",
  asyncHandler(async (req, res) => {
    let fivetyAssets = dataStep1;
    fivetyAssets.forEach((asset, idx) => asset.symbol);
    for (let i = 25; i < fivetyAssets.length; i++) {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${fivetyAssets[i].cmcId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CMC_PRO_API_KEY": coinmarketcapKey,
          },
        }
      );
      const data = await response.json();
      const assetDetails = {
        assetDetails: data.data[fivetyAssets[i].cmcId],
      };
      const ret = Object.assign(fivetyAssets[i], assetDetails);

      fivetyAssets[i] = ret;
    }
  })
);

module.exports = router;
