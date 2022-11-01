const express = require("express");
const router = express.Router();
const cargaProductoController = require("../controllers/cargaProductoController");
const upload = require("./upload");

router.get("/", cargaProductoController.view);
router.post(
  "/",
  upload.single("imagen-producto"),
  cargaProductoController.store
);
//enviarle un middleware a la ruta del form, le pasamos al controlador un poder como para crear informacion
//al single le paso como parametro el name que le puse al input de la imagen
module.exports = router;
