const express = require("express")
const router = express.Router()

const productsController = require("../controllers/productsController")

// Carga de la vista de Productos
router.get("/", productsController.index)

// Detalle de Producto
router.get("/:id", productsController.detalle)

module.exports = router
