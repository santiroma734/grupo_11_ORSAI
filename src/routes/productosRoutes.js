const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productosController");

// Carga de la vista de Productos
router.get("/", productosController.index);

// Detalle de Producto
router.get("/:id", productosController.detalle);

module.exports = router;
