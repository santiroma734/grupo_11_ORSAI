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
  save: (req, res) => {
    const id = Number(req.params.id);
    const producto = products.find((p) => p.id === id);

    producto.nombre = req.body.nombre;
    producto.precio = Number(req.body.precio);
    producto.esPromocion = req.body.esPromocion;
    producto.categoria = req.body.categoria;
    producto.descripcion = req.body.descripcion;
    producto.imagen = req.file.filename;

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/edicion-producto/:id");
  },
};

module.exports = controller;
