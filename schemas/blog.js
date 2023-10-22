const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  userId: String,
  heading: String,
  content: String,
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  comments: [{ type: String }],
});

module.exports = mongoose.model("blog", blogSchema);
