const express = require("express");
const cors = require("cors"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");



//Routes import
const blogRoute = require("./routes/blogRoute");
const userRoute = require("./routes/userRoute");
const commentRoute = require("./routes/commentRoute");
const app = express();
module.exports = app;
// CONFIGURATIONS
app.use(bodyParser.urlencoded({ extended: true })); // for parsing (form data) i.e. application/x-www-form-urlencoded//this is the middleware we talked about using req.body
app.use(bodyParser.json());
app.use(session({ secret: "thisIsSecret" }));

// Use the cors middleware
app.use(cors());

// DATABASE CONNECTION
const DB_URL = "mongodb://127.0.0.1:27017/Myntra";
mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb" + err));

// ROUTES
app.use("/api", blogRoute);
app.use("/api", userRoute);
app.use("/api", commentRoute);



app.get("/", (req, res) => {
  res.send("Looks fine, now check the other routes!");
});
app.listen(4000, () => {
  console.log("on port 4000!!!");
});
