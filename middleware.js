module.exports.isUserLoggedIn = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).send("You are not signedIn");
  }
};
