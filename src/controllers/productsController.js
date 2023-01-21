// const path = require("path");
// const fs = require("fs");
// const productsFilePath = path.join(__dirname, "../database/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models");
const Products = db.Product;

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
    // const product = products.find((p) => p.id === id);
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
      image: req.file ? req.file.filename : "default.jpg",
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
    const id = Number(req.params.id);
    const product = await Products.findByPk(id);

    try {
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
      res.redirect(`/products/${id}`);
    } catch (err) {
      res.send(err);
    }

    // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
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
