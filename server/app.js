const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});

app.use(require("./router/auth"));
