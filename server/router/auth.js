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
      return res
        .status(422)
        .json({ error: "User already registered with same Email!" });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Passwords not matched!" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });

      await user.save();
      res.status(201).json({ message: "user registered successfully!", user });
      console.log(user);
    }
  } catch (err) {
    console.log(err);
  }
  //   res.json({ message: req.body });
});

router.get("/get", async (req, res) => {
  try {
    const userdata = await User.find();
    res.status(201).json(userdata);
    // console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);
    if (!userLogin) {
      res.status(400).json({ message: "Please enter correctly data!" });
    } else {
      res.status(201).json({ message: userLogin });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/", (req, res) => {
  console.log(`Home called from routerJS!`);
  res.send(`Hello from server - RouterJS`);
});

router.get("/about", middleware, (req, res) => {
  console.log(`About called!`);
  res.send(`Hello from server - About`);
});

module.exports = router;
