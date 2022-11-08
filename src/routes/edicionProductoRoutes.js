const express = require("express");
const edicionProductoController = require("../controllers/edicionProductoController");

const router = express.Router();

router.get("/", edicionProductoController.view);
router.get("/:id", edicionProductoController.edicion);

module.exports = router;
