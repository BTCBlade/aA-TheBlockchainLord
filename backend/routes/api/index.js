const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const portfoliosRouter = require("./portfolios.js");
const watchlistsRouter = require("./watchlists.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/portfolios", portfoliosRouter);
router.use("/watchlists", watchlistsRouter);

module.exports = router;
