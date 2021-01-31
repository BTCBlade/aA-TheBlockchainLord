const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

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
  "/:watchlistId/",
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
  "/:watchlistId/",
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

router.patch(
  "/:id(\\d+)/",
  asyncHandler(async (req, res) => {
    const watchlistId = parseInt(req.params.id, 10);

    const watchlist = await db.Watchlist.findByPk(watchlistId, {
      include: {
        model: db.Asset,
      },
    });

    // Query joins table where releavant watchlistId and assetsId

    return res.send("hello from update route");
  })
);
module.exports = router;
