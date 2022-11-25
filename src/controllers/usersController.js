const path = require("path");
const fs = require("fs");
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
    const formData = req.body
    const newUser = {
      id: Date.now(),
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      contrasenia: req.body.contrasenia,
      // imagen: 
      telefono: req.body.telefono,
    }

    usuarios.push(newUser)
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, " "))
    return res.redirect('/')
  },
  profile: (req, res) => {
    res.render('users/perfilUsuario')
  },
};

module.exports = controller;