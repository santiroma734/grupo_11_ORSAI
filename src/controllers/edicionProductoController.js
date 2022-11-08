const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  view: (req, res) => {
    res.render("edicionDeProducto");
  },
  edicion: function (req, res) {
    const id = Number(req.params.id);
    const producto = products.find((p) => p.id === id);
    res.render("edicionDeProducto", { producto });
  },
};

module.exports = controller;
