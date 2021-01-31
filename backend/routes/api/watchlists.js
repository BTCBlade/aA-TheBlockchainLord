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
  "/:watchlistId/remove-asset/:assetId",
  asyncHandler(async (req, res) => {
    const assetId = parseInt(req.params.assetId, 10);
    const watchlistId = parseInt(req.params.watchlistId, 10);

    console.log("assetId ", assetId, " watchlistId ", watchlistId);
    return res.send("hello from backend");
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
