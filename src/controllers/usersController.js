const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const usuariosFilePath = path.join(__dirname, "../data/users.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  loginUser: (req, res) => {
    const userToLogin = usuarios.find((user) => {
      return user.email === req.body.email;
    });
    // Si el usuario existe
    if (userToLogin) {
      const contraseniaCorrecta = bcrypt.compareSync(
        req.body.contrasenia,
        userToLogin.contrasenia
      );
      // Si la contraseña es correcta
      if (contraseniaCorrecta) {
        delete userToLogin.contrasenia;
        req.session.usuarioLogueado = userToLogin;
        // // if (req.body.remember) {} // COOKIES
        // res.locals.isLogged = true;
        // res.locals.loguedUser = req.session.usuarioLogueado;
        console.log("loguado");
        console.log(res.locals);
        console.log(req.session);
        return res.redirect("/users/profile");
      }
      console.log("contraseña incorrecta");
      return res.render("users/login", {
        errors: {
          contrasenia: {
            msg: "Contraseña Incorrecta",
          },
        },
      });
    }
    if (!userToLogin) {
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Este e-mail no esta en nuestra BD",
          },
        },
      });
    }
  },
  register: (req, res) => {
    res.render("users/register");
  },
  registerUser: (req, res) => {
    // proceso de registro de usuario.
    console.log(req);
    const newUser = {
      id: Date.now(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      telefono: req.body.telefono,
      contrasenia: bcrypt.hashSync(req.body.contrasenia, 7),
      imagen: req.file.filename,
    };

    usuarios.push(newUser);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, " "));
    return res.redirect("/users/login");
  },
  profile: (req, res) => {
    res.render("users/perfilUsuario", { usuario: req.session.usuarioLogueado });
  },
};

module.exports = controller;
