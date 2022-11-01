const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  view: function (req, res) {
    res.render("productDetail");
  },
  detalle: function (req, res) {
    const id = Number(req.params.id);
    const producto = products.find((p) => p.id === id);
    res.render("productDetail", { producto });
  },
};
module.exports = controller;
