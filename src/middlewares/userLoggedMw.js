const path = require("path");
const fs = require("fs");
const usuariosFilePath = path.join(__dirname, "../database/users.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));

module.exports = function userLoggedMw(req, res, next) {
  // resetea el booleano de que hay un usuario logueado en los archivos locales del navegador
  res.locals.isLogged = false;

  const userEmailCookie = req.cookies?.loggedUserEmail;

  // busca al usuario que esta en las cookies (identificandolo por el email, que es el dato que se guarda)
  // para luego usar esa información (nombre, telefono, etc) en la vista que corresponda
  const userInCookies = usuarios.find(
    (user) => user["email"] === userEmailCookie
  );

  if (userInCookies) {
    req.session.loggedUser = userInCookies;
  }

  // si hay un usuario en la sesión (por las cookies o solo por la sesión) se guardan sus datos en locals
  // para usarlos en las vistas
  if (req.session.loggedUser) {
    res.locals.isLogged = true;
    res.locals.loggedUser = req.session.loggedUser;
  }
  next();
};
