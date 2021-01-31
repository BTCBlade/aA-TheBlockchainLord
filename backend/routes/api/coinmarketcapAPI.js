const express = require("express");
const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

const db = require("../../db/models");
const router = express.Router();

const { apiKeys } = require("../../config");

const { coinmarketcapKey } = apiKeys;

//WatchlistAssets Live Quotes

router.patch(
  "/watchlist/:watchlistId(\\d+)/",
  asyncHandler(async (req, res) => {
    const watchlistId = parseInt(req.params.id, 10);
    const cmcIdArr = Object.values(req.body).map((asset) => [
      asset.id,
      asset.cmcId,
    ]);
    console.log(cmcIdArr);
    //prep external API reqeust URL string
    let apiRequestStr =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=";
    for (let i = 0; i < cmcIdArr.length; i++) {
      if (i < cmcIdArr.length - 1) {
        apiRequestStr += cmcIdArr[i][1].toString() + ",";
      } else {
        apiRequestStr += cmcIdArr[i][1].toString();
      }
    }
    const apiRes = await fetch(apiRequestStr, {
      headers: {
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": coinmarketcapKey,
      },
    });
    const apiData = await apiRes.json();
    console.log(apiData);
    if (apiData.status.error_code === 0) {
      res.json(apiData.data);
    } else {
      throw Error("external api call failure");
    }
  })
);

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
