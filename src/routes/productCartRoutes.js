const express = require("express");
const router = express.Router();
const productCartController = require("../controllers/productCartController");

router.get("/", productCartController.view);

module.exports = router;
