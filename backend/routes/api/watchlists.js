const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");

const router = express.Router();

//Retrieve portfolio
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

module.exports = router;
