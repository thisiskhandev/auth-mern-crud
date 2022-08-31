const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    // Getting token
    const token = req.cookies.jwtoken;
    // Verify token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    // Getting data of user with the help of token
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    //   rootUser means hamara user ka complete object
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unathorized: No token provided!");
    console.log(err);
  }
};

module.exports = Authenticate;
