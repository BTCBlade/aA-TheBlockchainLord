const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const portfoliosRouter = require("./portfolios.js");
const watchlistsRouter = require("./watchlists.js");
const assetsRouter = require("./assets.js");
const coinmarketcapAPIRouter = require("./coinmarketcapAPI.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/portfolios", portfoliosRouter);
router.use("/watchlists", watchlistsRouter);
router.use("/assets", assetsRouter);

router.use("/coinmarketcapAPI", coinmarketcapAPIRouter);

module.exports = router;
