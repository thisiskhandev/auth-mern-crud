const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`DB Connection successful!`);
  })
  .catch((err) => console.log(`DB No Connection! --> ${err}`));

  