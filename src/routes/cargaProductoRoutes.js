const express = require("express");
const cargaProductoController = require("../controllers/cargaProductoController");

const router = express.Router();

router.get("/", cargaProductoController.view);

module.exports = router;
