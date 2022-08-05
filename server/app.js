const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

const User = require("./model/userSchema");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

app.use(express.json());

app.use(require("./router/auth"));


