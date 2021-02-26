const express = require("express");
const asyncHandler = require("express-async-handler");

const db = require("../../db/models");
const router = express.Router();

//Create a new user's Portfolio
router.post(
  "",
  asyncHandler(async (req, res) => {
    const portfolio = await db.Portfolio.create({
      createdByUserId: req.body.userId,
      name: req.body.name,
      cashUSD: 10000,
    });
    return res.json({ portfolio });
  })
);

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

//Buying an Asset, 1. Deduct USD from Portfolio cashUSD, 2. add or update PortfolioAssetsJoins Entry
router.put(
  "/:id(\\d+)/buy",
  asyncHandler(async (req, res) => {
    const portfolioId = parseInt(req.params.id, 10);
    const assetId = req.body.assetId;
    const amount = parseFloat(req.body.amount);
    const priceUSD = parseFloat(req.body.priceUSD);

    //deduct cashUSD balance
    const portfolio = await db.Portfolio.findByPk(portfolioId);
    const costInUSD = amount * priceUSD;
    if (costInUSD > parseFloat(portfolio.cashUSD)) {
      throw Error("Not enough cash USD in account");
    } else {
      portfolio.cashUSD = parseFloat(portfolio.cashUSD) - costInUSD;
      await portfolio.save();
    }

    //2. add or update PortfolioAssetsJoins Entry
    const PAJres = await db.PortfolioAssetsJoins.findOrCreate({
      where: {
        assetId: assetId,
        portfolioId: portfolioId,
      },
    });
    const PAJEntry = PAJres[0];
    if (PAJEntry.quantityOfAsset) {
      const oldAmount = parseFloat(PAJEntry.quantityOfAsset);
      const newCostAvg =
        (oldAmount * parseFloat(PAJEntry.costAvg) + amount * priceUSD) /
        (oldAmount + amount);
      PAJEntry.costAvg = newCostAvg;
      PAJEntry.quantityOfAsset = oldAmount + amount;
      const newHistoryEntry = JSON.stringify({
        date: Date.parse(new Date()),
        quantity: amount,
        purchasePrice: priceUSD,
      });
      PAJEntry.history = [...PAJEntry.history, newHistoryEntry];
      await PAJEntry.save();
    } else {
      PAJEntry.quantityOfAsset = amount;
      PAJEntry.costAvg = priceUSD;
      PAJEntry.history = [
        JSON.stringify({
          date: Date.parse(new Date()),
          quantity: amount,
          purchasePrice: priceUSD,
        }),
      ];
      await PAJEntry.save();
    }
    //attach portfolio.cashUSD for redux store loading.portfoliometa.cashUSD update

    return res.json([portfolio, PAJEntry]);
  })
);

router.put(
  "/:id(\\d+)/sell",
  asyncHandler(async (req, res) => {
    const portfolioId = parseInt(req.params.id, 10);
    const assetId = req.body.assetId;
    const amount = parseFloat(req.body.amount);
    const priceUSD = parseFloat(req.body.priceUSD);

    //2. add to cashUSD balance
    const portfolio = await db.Portfolio.findByPk(portfolioId);
    const amountToAdd = amount * priceUSD;

    portfolio.cashUSD = parseFloat(portfolio.cashUSD) + amountToAdd;
    await portfolio.save();

    //1. update or remove PortfolioAssetJoins Entry
    const PAJres = await db.PortfolioAssetsJoins.findAll({
      where: {
        assetId: assetId,
        portfolioId: portfolioId,
      },
    });
    const PAJEntry = PAJres[0];
    if (parseFloat(PAJEntry.quantityOfAsset) - amount >= 0.0001) {
      //then update entry

      PAJEntry.quantityOfAsset = parseFloat(PAJEntry.quantityOfAsset) - amount;
      const newHistoryEntry = JSON.stringify({
        date: Date.parse(new Date()),
        quantity: amount * -1,
        purchasePrice: priceUSD,
      });
      PAJEntry.history = [...PAJEntry.history, newHistoryEntry];
      await PAJEntry.save();
      return res.json([portfolio, PAJEntry]);
    } else {
      //destroy entry
      await PAJEntry.destroy();
      return res.json([
        portfolio,
        { assetId: PAJEntry.assetId, portfolioId: false },
      ]);
    }
  })
);

module.exports = router;
