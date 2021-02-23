const express = require("express");
const asyncHandler = require("express-async-handler");
const fetch = require("node-fetch");

const { apiKeys } = require("../../config");

const { coinmarketcapKey } = apiKeys;

const db = require("../../db/models");

const router = express.Router();

//Create a new user's Watchlists table entry
router.post(
  "",
  asyncHandler(async (req, res) => {
    const watchlist = await db.Watchlist.create({
      userId: req.body.userId,
      name: req.body.name,
    });
    return res.json({ watchlist });
  })
);

//Retrieve watchlists
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const watchlistId = parseInt(req.params.id, 10);

    const watchlist = await db.Watchlist.findByPk(watchlistId, {
      include: {
        model: db.Asset,
      },
    });

    return res.send(watchlist);
  })
);

//Delete one asset from one watchlist
router.delete(
  "/:watchlistId(\\d+)/",
  asyncHandler(async (req, res) => {
    const assetId = req.body.assetId;
    const watchlistId = parseInt(req.params.watchlistId, 10);

    const watchlistasset = await db.WatchlistAssetsJoins.destroy({
      where: {
        watchlistId: watchlistId,
        assetId: assetId,
      },
    });

    return res.json(watchlistasset);
  })
);

//Add one asset to one watchlist
router.post(
  "/:watchlistId(\\d+)/",
  asyncHandler(async (req, res) => {
    const watchlistId = parseInt(req.params.watchlistId, 10);
    const assetId = req.body.assetId;
    const watchlistasset = await db.WatchlistAssetsJoins.findOrCreate({
      where: {
        watchlistId: watchlistId,
        assetId: assetId,
      },
    });

    return res.json(watchlistasset);
  })
);
//Update watchlist
//1. send assetId from frontend to here on body
//2. destructure assetId from body
//3. query for watchlist
//4. remove asset from watchlist with assetId
//5. send back updated watchlist

module.exports = router;
