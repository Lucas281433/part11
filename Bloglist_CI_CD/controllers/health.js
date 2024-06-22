const healthRouter = require("express").Router();

healthRouter.get("/", (req, res) => {
  res.send("OK");
});

module.exports = healthRouter;
