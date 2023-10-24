const User = require("../schemas/user");

//register
exports.registerUser = async (req, res) => {
  const { emailId, password } = req.body;
  // console.log(req.body);
  const newUser = new User({
    emailId: emailId,
    password: password,
  });
  await newUser.save();
  // console.log(newUser._id);
  if (emailId) {
    req.session.userId = newUser._id;
  } else {
    req.session.userId = 0;
  }
  res.status(200).send("success");
};
//signing
exports.signIn = async (req, res) => {
  const { emailId, password } = req.body;
  const checkUser = await User.findOne({ emailId: emailId });
  if (checkUser.password == password) {
    req.session.userId = checkUser._id;
    res.status(200).json({ message: "success" }); // Send a valid JSON response
  } else {
    res.status(400).json({ message: "error" }); // Send a valid JSON response for error case
  }
};

//follow routes
exports.followUser = async (req, res) => {
  console.log(req.session.userId);
  try {
    const currentId = req.session.userId;
    const { followUserId } = req.body;
    await User.updateOne(
      { _id: currentId },
      { $push: { following: followUserId } }
    );
    res.send("success");
  } catch (e) {
    // console.log(e);
    res.send("error");
  }
};
