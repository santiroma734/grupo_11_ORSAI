const path = require("path");
const { check } = require("express-validator");

const productsValidations = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .isLength(5)
    .withMessage("El nombre debe tener al menos 5 caracteres"),
  check("description")
    .isLength(20)
    .withMessage("La descripción debe tener al menos 20 caracteres"),
  check("image").custom((value, { req }) => {
    const image = req.files.image;
    const acceptedExt = [".jpg", ".png", ".jpeg"];

    console.log(req.files.image);
    console.log(req.files.image[0].filename);

    if (!image) {
      throw new Error("Debe subir una imagen.");
    }

    if (image && !acceptedExt.includes(path.extname(image[0].originalname))) {
      throw new Error(`El formato debe ser ${acceptedExt.join(", ")}.`);
    }
    return true;
  }),
  check("price").notEmpty().withMessage("El campo precio es obligatorio"),
];

module.exports = productsValidations;
