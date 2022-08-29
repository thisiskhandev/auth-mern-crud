const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authenticate = require("../middleware/authenticate");

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
      return res.status(422).json({ error: "Passwords not matched!" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });

      await user.save();
      res.status(201).json({ message: "User registered successfully!", user });
      console.log(user);
    }
  } catch (err) {
    console.log(err);
  }
  //   res.json({ message: req.body });
});

// Get All user data
router.get("/get", async (req, res) => {
  try {
    const userdata = await User.find();
    res.status(201).json(userdata);
    // console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

// login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data!" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      // Creating cookies
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      });
      // console.log(userLogin);
      if (!isMatch) {
        res.status(400).json({ message: "Password did not match!" });
      } else {
        res
          .status(201)
          .json({ message: "User signin successfull!", userLogin });
      }
    } else {
      res.status(400).json({ message: "Invalid Credentials!" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/", (req, res) => {
  console.log(`Home called!`);
  res.send(`Hello from server - RouterJS`);
});

router.get("/about", Authenticate, (req, res) => {
  // res.cookie("test", "Khan");
  console.log(`About called!`);
  res.send(`Hello from server - About`);
});

module.exports = router;
