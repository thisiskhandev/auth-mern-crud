const express = require("express");
const app = express();

PORT = 8000;

const middleware = (req, res, next) => {
  console.log(`This is middleware!`);
  next();
};

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Hello from server - Homepage`);
});

app.get("/about", middleware, (req, res) => {
  console.log(`Hello about`);
  res.send(`Hello from server - About`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello from server - Contact`);
});
