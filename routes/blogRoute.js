const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { storage } = require("../cloudinary/index");
const upload = multer({ storage });

const {
  postBlog,
  getSingleBlog,
  getAllBlog,
  deleteBlog,
  getBlogByFollowing,
} = require("../controllers/blog");
const { isUserLoggedIn } = require("../middleware");
const blogRoute = express();

blogRoute.use(express.json());
blogRoute.use(bodyParser.urlencoded({ extended: true }));

blogRoute.post("/create", upload.array("images"), postBlog);
blogRoute.get("/blog/:id", getSingleBlog);
blogRoute.delete("/blog/:id", isUserLoggedIn, deleteBlog);
blogRoute.get("/blogs", getAllBlog);
blogRoute.get("/getBlogByFollowing", isUserLoggedIn, getBlogByFollowing);

module.exports = blogRoute;
