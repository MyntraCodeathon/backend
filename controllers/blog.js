const Blog = require("../schemas/blog");
exports.postBlog = async (req, res) => {
  try {
    const { userId, heading, content } = req.body;
    const newblog = new Blog({
      userId: userId,
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
exports.deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  try {
    await Blog.findByIdAndDelete(blogId);
    res.status(200).send({ msg: "Successfully Deleted" });
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
