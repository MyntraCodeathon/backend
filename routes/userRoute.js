const express = require("express");
const bodyParser = require("body-parser");

const { registerUser, signIn, logOut } = require("../controllers/user");

const userRoute = express();

userRoute.use(express.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));

//routes
userRoute.post("/register", registerUser);
userRoute.post("/signIn", signIn);
userRoute.get("/logOut", logOut);

module.exports = userRoute;
