const express = require("express");
const bodyParser = require("body-parser");
const { addComment } = require("../controllers/comment");
const { isUserLoggedIn } = require("../middleware");
const commentRoute = express();

commentRoute.use(express.json());
commentRoute.use(bodyParser.urlencoded({ extended: true }));
//routes

commentRoute.post("/addComment", addComment);

module.exports = commentRoute;
