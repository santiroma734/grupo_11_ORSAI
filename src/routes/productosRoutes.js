const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productosController");
const upload = require("../middlewares/upload");

// Carga de la vista de Productos
router.get("/", productosController.index);

// Carga de Producto
router.get("/crear", productosController.crear);
router.post(
  "/crear",
  upload.single("imagen"),
  productosController.store
  );

// Detalle de Producto
router.get("/:id", productosController.detalle);

// Edición de Producto
router.get("/:id/editar", productosController.edicion);
router.put(
  "/:id/editar",
  upload.single("imagen-producto"),
  productosController.save
);

// Eliminar un producto
router.delete('/:id', productosController.delete)

module.exports = router;
