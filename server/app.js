const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log(`This is middleware!`);
  next();
};

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

app.get("/", (req, res) => {
  console.log(`Home called!`);
  res.send(`Hello from server - Homepage`);
});

app.get("/about", middleware, (req, res) => {
  console.log(`About called!`);
  res.send(`Hello from server - About`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello from server - Contact`);
});
