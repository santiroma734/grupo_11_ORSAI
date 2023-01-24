const path = require("path");
const { check } = require("express-validator");

const registerValidations = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre es obligatiorio")
    .isLength(2)
    .withMessage("El nombre debe tener al menos 2 caracteres"),
  check("lastName").notEmpty().withMessage("El campo apellido es obligatiorio"),
  check("email")
    .notEmpty()
    .withMessage("El campo email es obligatiorio")
    .isEmail()
    .withMessage("El email debe tener un formato válido"),
  check("password")
    .notEmpty()
    .withMessage("El campo contraseña es obligatiorio")
    .isLength(8)
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  check("phone")
    .isNumeric()
    .withMessage("El teléfono debe tener un formato válido"),
  check("image").custom((value, { req }) => {
    const file = req.file;
    const acceptedExt = [".jpg", ".jpeg", ".png"];
    if (!file) {
      throw new Error("Debe subir una imagen");
    }
    if (file && !acceptedExt.includes(path.extname(file.originalname))) {
      throw new Error(`El formato debe ser ${acceptedExt.join(", ")}`);
    }
    return true;
  }),
];

module.exports = registerValidations;
