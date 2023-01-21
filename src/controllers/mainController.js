const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models");
const Products = db.Product;

const controller = {
  index: (req, res) => {
    Products.findAll({ include: { model: db.Category, as: "category" } })
      .then((products) => res.render("home", { products }))
      .catch((err) => res.send(err));
  },
};

module.exports = controller;
