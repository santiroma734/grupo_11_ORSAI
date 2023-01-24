const path = require("path");
const { check } = require("express-validator");

const loginValidations = [
  check("email")
    .notEmpty()
    .withMessage("El campo email es obligatiorio")
    .isEmail()
    .withMessage("El email debe tener un formato válido"),
  check("password")
    .notEmpty()
    .withMessage("El campo contraseña es obligatiorio"),
];

module.exports = loginValidations;
