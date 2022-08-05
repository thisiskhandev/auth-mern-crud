const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cparssword: {
    type: String,
    required: true,
  },
});
// Models
const User = mongoose.model("USER", userSchema);

module.export = User;
