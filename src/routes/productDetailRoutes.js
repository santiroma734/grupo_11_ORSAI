const express = require("express");
const productDetailController = require("../controllers/productDetailController");
const router = express.Router();

router.get("/", productDetailController.view);
router.get("/:id", productDetailController.detalle);

module.exports = router;
