const path = require("path");
const fs = require("fs");
const productosFilePath = path.join(__dirname, "../data/productos.json");
const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    res.render("productos", { productos });
  },

  detalle: function (req, res) {
    const id = Number(req.params.id);
    const producto = productos.find((p) => p.id === id);
    res.render("productDetail", { producto });
  },

  carga: (req, res) => {
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
    fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
    res.redirect("/productos");
  },

  edicion: function (req, res) {
    const id = Number(req.params.id);
    const producto = productos.find((p) => p.id === id);
    res.render("edicionDeProducto", { producto });
  },

  save: (req, res) => {
    const id = Number(req.params.id);
    const producto = productos.find((p) => p.id === id);

    producto.nombre = req.body.nombre;
    producto.precio = Number(req.body.precio);
    producto.esPromocion = req.body.esPromocion;
    producto.categoria = req.body.categoria;
    producto.descripcion = req.body.descripcion;
    // producto.imagen = req.file.filename;

    fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
    res.redirect(`/productos/${id}/editar`);
  },
};

module.exports = controller;
