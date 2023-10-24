const Comment = require("../schemas/comment");
const Blog = require("../schemas/blog");
const User = require("../schemas/user");
//nothing
exports.addComment = async (req, res) => {
  try {
    const { blogId, content } = req.body;
    // const blog = await Blog.findById(blogId);
    const newComment = new Comment({
      userId: req.session.userId,
      content: content,
    });
    console.log(newComment);
    const newComment1 = await newComment.save();
    await Blog.updateOne(
      { _id: blogId },
      { $push: { comments: newComment1._id } }
    );
    res.status(200).send("success");
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
