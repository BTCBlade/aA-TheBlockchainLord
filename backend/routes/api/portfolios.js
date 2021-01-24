const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");
const router = express.Router();

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const portfolioId = parseInt(req.params.id, 10);

    const portfolio = await db.Portfolio.findByPk(portfolioId, {
      include: {
        model: db.Asset,
      },
    });

    return res.send(portfolio);
  })
);

module.exports = router;
