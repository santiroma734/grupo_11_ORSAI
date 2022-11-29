const path = require("path");
const fs = require("fs");
// const bcrypt = require("bcryptjs");
const usuariosFilePath = path.join(__dirname, "../data/users.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));

const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  register: (req, res) => {
    res.render("users/register");
  },
  registerUser: (req, res) => {
    // proceso de registro de usuario.
    console.log(req.body);
    // const formData = req.body;
    const newUser = {
      id: Date.now(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      telefono: req.body.telefono,
      // contrasenia: bcrypt.hashSync(req.body.contrasenia, 7),
      imagen: req.body.imagen,
      contrasenia: req.body.contrasenia,
    };

    usuarios.push(newUser);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, " "));
    return res.redirect("/");
  },
  profile: (req, res) => {
    res.render("users/perfilUsuario");
  },
};

module.exports = controller;
