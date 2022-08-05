const express = require("express");
const router = express.Router();

const middleware = (req, res, next) => {
  console.log(`This is middleware!`);
  next();
};

router.get("/", (req, res) => {
  console.log(`Home called from routerJS!`);
  res.send(`Hello from server - RouterJS`);
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});

router.get("/", (req, res) => {
  console.log(`Home called!`);
  res.send(`Hello from server - Homepage`);
});

router.get("/about", middleware, (req, res) => {
  console.log(`About called!`);
  res.send(`Hello from server - About`);
});

module.exports = router;
