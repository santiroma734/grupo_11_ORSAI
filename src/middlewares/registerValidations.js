const path = require("path");
const { check } = require("express-validator");

const registerValidations = [
  check("firstName").notEmpty(),
  check("lastName").notEmpty(),
  check("email").notEmpty(),
  check("password").notEmpty(),
  check("phone"),
  check("image"),
];

module.exports = registerValidations;
