const mongoose = require("mongoose");
const User = require("../schemas/user");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
