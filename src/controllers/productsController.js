const db = require("../database/models");
const Products = db.Product;
const { validationResult } = require("express-validator");

const controller = {
  index: async (req, res) => {
    try {
      const products = await Products.findAll({
        include: { model: db.Category, as: "category" },
      });
      res.render("productsMenu", { products });
    } catch (err) {
      res.send(err);
    }
  },

  detalle: async (req, res) => {
    const id = Number(req.params.id);
    try {
      const product = await Products.findByPk(id);
      res.render("productDetail", { product });
    } catch (err) {
      res.send(err);
    }
  },

  renderLoadProduct: (req, res) => {
    res.render("admin/loadProduct");
  },
  storeNewProduct: async (req, res) => {
    const resultProductsValidations = validationResult(req);

    console.log(resultProductsValidations);

    if (resultProductsValidations.errors.length > 0) {
      return res.render("admin/loadProduct", {
        errors: resultProductsValidations.mapped(),
        oldData: req.body,
      });
    }

    let newProduct = {
      name: req.body.name,
      price: Number(req.body.price),
      idCategory:
        req.body.category === "Pizza"
          ? 1
          : req.body.category === "Empanada"
          ? 2
          : 3,
      description: req.body.description,
      image: req.files.image ? req.files.image[0].filename : "default.jpg",
    };

    try {
      await Products.create(newProduct);
      res.redirect("/products");
    } catch (err) {
      res.send(err);
    }
    // products.push(newProduct);
    // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
  },

  renderEditProduct: async (req, res) => {
    const id = Number(req.params.id);
    try {
      const product = await Products.findByPk(id, {
        include: { model: db.Category, as: "category" },
      });

      res.render("admin/editProduct", { product });
    } catch (err) {
      res.send(err);
    }
  },

  saveProductChanges: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const product = await Products.findByPk(id, {
        include: { model: db.Category, as: "category" },
      });
      const resultProductsValidations = validationResult(req);

      if (
        resultProductsValidations.errors.length === 1 &&
        resultProductsValidations.errors[0].param == "image" &&
        resultProductsValidations.errors[0].value == undefined
      ) {
        await product.update({
          name: req.body.name,
          price: Number(req.body.price),
          idCategory:
            req.body.category === "Pizza"
              ? 1
              : req.body.category === "Empanada"
              ? 2
              : 3,
          description: req.body.description,
        });
        return res.redirect(`/products/${id}`);
      }

      if (resultProductsValidations.errors.length > 0) {
        return res.render("admin/editProduct", {
          errors: resultProductsValidations.mapped(),
          oldData: req.body,
          product,
        });
      }

      await product.update({
        name: req.body.name,
        price: Number(req.body.price),
        idCategory:
          req.body.category === "Pizza"
            ? 1
            : req.body.category === "Empanada"
            ? 2
            : 3,
        description: req.body.description,
        image: req.files.image ? req.files.image[0].filename : "default.jpg",
      });
      res.redirect(`/products/${id}`);
    } catch (err) {
      res.send(err);
    }
  },
  deleteProduct: async (req, res) => {
    const id = Number(req.params.id);
    try {
      await Products.destroy({
        where: { id: id },
      });
      res.redirect("/products");
    } catch (err) {
      res.send(err);
    }
    // const productsFiltered = products.filter((p) => p.id !== id);
    // fs.writeFileSync(
    //   productsFilePath,
    //   JSON.stringify(productsFiltered, null, " ")
    // );
  },
};

module.exports = controller;
