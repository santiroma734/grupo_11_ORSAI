const authAdmin = function (req, res, next) {
  if (req.session.loggedUser?.category.name !== "admin") {
    return res.redirect("/");
  }
  next();
};

module.exports = authAdmin;
