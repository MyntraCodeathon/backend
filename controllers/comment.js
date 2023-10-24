const Comment = require("../schemas/comment");
const Blog = require("../schemas/blog");
const User = require("../schemas/user");

exports.addComment = async (req, res) => {
  try {
    const { blogId, content } = req.body;
    await Blog.updateOne(
      { _id: blogId },
      { $push: { comments: content } } // Push the content directly to the comments array
    );

    const blog = await Blog.findById(blogId);
    const addedComment = blog.comments[blog.comments.length - 1]; // Get the last comment added
    res.status(200).send(addedComment);
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};