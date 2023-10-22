const User = require("../schemas/user");

//register
exports.registerUser = async (req, res) => {
  const { emailId, password } = req.body;
  console.log(req.body);
  const newUser = new User({
    emailId: emailId,
    password: password,
  });
  await newUser.save();
  if (emailId) {
    req.session.emailId = emailId;
  } else {
    req.session.emailId = 0;
  }
  res.status(200).send("success");
};
