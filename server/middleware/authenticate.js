const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    // Getting token
    const token = req.cookies.jwtoken;
    // Verify token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    // Getting data of user with the help of token
    const rootUser = await User.fineOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found 😒");
    } else {
      req.token = token;
      //   rootUser means hamara user ka complete object
      req.rootUser = rootUser;
      req.userID = rootUser._id;
      next();
    }
  } catch (error) {
    res.staus(401).send("Unathorized: No toke provided!");
    console.log(error);
  }
};

module.exports = Authenticate;
