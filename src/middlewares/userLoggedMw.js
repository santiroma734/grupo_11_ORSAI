module.exports = function userLoggedMw(req, res, next) {
  res.locals.isLogged = false;
  if (req.session.usuarioLogueado) {
    res.locals.isLogged = true;
    res.locals.loguedUser = req.session.usuarioLogueado;
  }
  next();
};
