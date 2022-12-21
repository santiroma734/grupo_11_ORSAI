const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    res.render("productsMenu", { products });
  },

  detalle: function (req, res) {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    res.render("productDetail", { product });
  },

  renderLoadProduct: (req, res) => {
    res.render("admin/loadProduct");
  },
  storeNewProduct: (req, res) => {
    let newProduct = {
      id: Date.now(),
      name: req.body.name,
      price: Number(req.body.price),
      isOffer: req.body.category === "Promocion" ? true : false,
      category: req.body.category,
      description: req.body.description,
      image: req.file ? req.file.filename : "default.jpg",
    };

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    return res.redirect("/");
  },

  renderEditProduct: function (req, res) {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);
    res.render("admin/editProduct", { product });
  },

  saveProductChanges: (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    product.name = req.body.name;
    product.price = Number(req.body.price);
    product.isOffer = req.body.isOffer;
    product.category = req.body.category;
    product.description = req.body.description;

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect(`/products/${id}/edit`);
  },
  deleteProduct: (req, res) => {
    const id = Number(req.params.id);
    const productsFiltered = products.filter((p) => p.id !== id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(productsFiltered, null, " ")
    );
    return res.redirect("/");
  },
};

module.exports = controller;
