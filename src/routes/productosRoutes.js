const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productosController");
const upload = require("../middlewares/upload");

// Carga de la vista de Productos
router.get("/", productosController.index);

// Detalle de Producto
router.get("/:id", productosController.detalle);

// Carga de Producto
router.get("/crear", productosController.carga);
router.post(
  "/crear",
  upload.single("imagen-producto"),
  productosController.store
);

// Edición de Producto
router.get("/:id/editar", productosController.edicion);
router.put(
  "/:id/editar",
  upload.single("imagen-producto"),
  productosController.save
);

module.exports = router;
