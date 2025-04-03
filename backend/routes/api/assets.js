const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allAssets = await db.Asset.findAll();

    await allAssets.forEach((asset) => {
      asset.quote = JSON.parse(asset.quote);
      asset.assetDetails = JSON.parse(asset.assetDetails);
    });
    return res.send(allAssets);
  })
);

module.exports = router;
