const path = require("path");
const fs = require("fs");
const productosFilePath = path.join(__dirname, "../data/productos.json");
const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    res.render("index", { productos });
  },
};

module.exports = controller;
