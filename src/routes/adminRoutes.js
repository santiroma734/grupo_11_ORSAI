const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const authAdmin = require("../middlewares/authAdmin");
const upload = require("../middlewares/upload");
const productsValidations = require("../middlewares/productsValidations");

// admin auth middleware
router.use(authAdmin);

// Carga de Producto
router.get("/create-product", productsController.renderLoadProduct);

router.post(
  "/create-product",
  upload.fields([{ name: "image", maxCount: 1 }]),
  productsValidations,
  productsController.storeNewProduct
);

// Edición de Producto
router.get("/edit-product/:id", productsController.renderEditProduct);

router.put(
  "/edit-product/:id",
  // upload.single("product-image"),
  productsValidations,
  productsController.saveProductChanges
);

// Eliminar un producto
router.delete("/delete-product/:id", productsController.deleteProduct);

module.exports = router;
