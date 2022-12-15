const authUser = function (req, res, next) {
  if (req.session.loggedUser) {
    return res.redirect("/users/profile");
  }
  next();
};

module.exports = authUser;
