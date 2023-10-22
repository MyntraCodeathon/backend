const Blog = require("../schemas/blog");
const User = require("../schemas/user");
exports.postBlog = async (req, res) => {
  try {
    console.log(req.session.userId);
    const { heading, content } = req.body;
    const newblog = new Blog({
      userId: req.session.userId,
      heading: heading,
      content: content,
    });
    newblog.images = req.files.map((f) => ({
      url: f.path,
      filename: f.filename,
    }));
    await newblog.save();
    res.status(200).send("success");
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
exports.getSingleBlog = async (req, res) => {
  const blogId = req.params.id;
  try {
    const blog = await Blog.findById(blogId);
    res.status(200).json(blog);
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
exports.getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(200).json(blog);
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
exports.getBlogByFollowing = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.session.userId });
    const blogs = await Blog.find({});
    const result = [];
    for (let blog of blogs) {
      for (let follow of user.following) {
        if (blog.userId == follow) {
          result.push(blog);
        }
      }
    }
    res.status(200).json(result);
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
exports.deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  try {
    await Blog.findByIdAndDelete(blogId);
    res.status(200).send({ msg: "Successfully Deleted" });
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
