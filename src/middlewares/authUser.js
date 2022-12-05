const authUser = function (req, res, next) {
  if (req.session.usuarioLogueado) {
    return res.redirect("/users/profile");
  }
  next();
};

module.exports = authUser;
