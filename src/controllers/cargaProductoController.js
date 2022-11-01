const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/productos.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  view: (req, res) => {
    res.render("cargaDeProducto");
  },
  // Create -  Method to store
  store: (req, res) => {
    let newProduct = {
      id: Date.now(),
      nombre: req.body.nombre,
      precio: Number(req.body.precio),
      esPromocion: req.body.esPromocion,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      imagen: req.file.filename,
    };

    productos.push(newProduct);

    fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, " "));

    res.redirect("/productos");
  },
};

module.exports = controller;
