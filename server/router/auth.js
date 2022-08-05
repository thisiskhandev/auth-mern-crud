const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

const middleware = (req, res, next) => {
  console.log(`This is middleware!`);
  next();
};

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  //   console.log(name);

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the data - Server" });
  }
  try {
    //   left wala db ha or right wala jo humne fill kia ha
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist!" });
    }
    const user = new User({ name, email, phone, password, cpassword });
    await user.save();
    res.status(201).json({ message: "user registered successfully!", user});
    console.log(user);
  } catch (err) {
    console.log(err);
  }
  //   res.json({ message: req.body });
});

router.get("/", (req, res) => {
  console.log(`Home called from routerJS!`);
  res.send(`Hello from server - RouterJS`);
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
