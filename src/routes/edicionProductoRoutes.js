const express = require("express");
const edicionProductoController = require("../controllers/edicionProductoController");

const router = express.Router();

router.get("/", edicionProductoController.view);

module.exports = router;
