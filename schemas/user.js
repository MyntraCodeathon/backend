const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
  interests: [],
  following: [],
  tokens: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
