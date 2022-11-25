const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productosController");
const upload = require("../middlewares/upload");

// Carga de Producto
router.get("/crear-producto", productosController.crear);
router.post("/crear-producto", upload.single("imagen"), productosController.store);

// Edición de Producto
router.get("/editar-producto/:id", productosController.edicion);
router.put(
  "/editar-producto/:id",
  upload.single("imagen-producto"),
  productosController.save
);

// Eliminar un producto
router.delete("/eliminar-producto/:id", productosController.delete);

module.exports = router;
