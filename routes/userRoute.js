const express = require("express");
const bodyParser = require("body-parser");

const { registerUser, followUser, signIn } = require("../controllers/user");

const { isUserLoggedIn } = require("../middleware");
const userRoute = express();

userRoute.use(express.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));

//routes
userRoute.post("/register", registerUser);
userRoute.post("/followUser", isUserLoggedIn, followUser);
userRoute.post("/signIn", signIn);

module.exports = userRoute;
