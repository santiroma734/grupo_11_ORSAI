const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
// SOLO PARA CREAR VISTA DEL PERFIL DE USUARIO

const path = require("path");
const fs = require("fs");
const usuariosFilePath = path.join(__dirname, "../database/users.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));
const usuario = usuarios.pop();

router.get("/perfil", (req, res) => {
  res.render("users/userprofile", { usuario });
});

module.exports = router;
