const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");
const router = express.Router();

//Retrieve portfolio
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

//Update Portfolio
router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const portfolioId = parseInt(req.params.id, 10);
    const updateInfo = req.body;
    console.log(req.body);

    return res.send(req.body);
  })
);

module.exports = router;
