const path = require("path")
const fs = require("fs")
const productsFilePath = path.join(__dirname, "../data/products.json")
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

const controller = {
  index: (req, res) => {
    res.render("productsMenu", { products })
  },

  detalle: function (req, res) {
    const id = Number(req.params.id)
    // console.log(products)
    const product = products.find((p) => p.id === id)
    // console.log(producto)
    res.render("productDetail", { product })
  },

  renderLoadProduct: (req, res) => {
    res.render("admin/loadProduct")
  },
  // Create -  Method to store
  storeNewProduct: (req, res) => {
    // console.log(req.body)
    // console.log(req.file)
    let newProduct = {
      id: Date.now(),
      nombre: req.body.nombre,
      precio: Number(req.body.precio),
      esPromocion: req.body.categoria === "Promocion" ? true : false,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      imagen: req.file ? req.file.filename : "default.jpg",
    }

    products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
    return res.redirect("/")
  },

  renderEditProduct: function (req, res) {
    const id = Number(req.params.id)
    const product = products.find((p) => p.id === id)
    res.render("admin/editProduct", { product })
  },

  saveProductChanges: (req, res) => {
    const id = Number(req.params.id)
    const producto = products.find((p) => p.id === id)

    producto.name = req.body.name
    producto.price = Number(req.body.price)
    producto.isPromotion = req.body.isPromotion
    producto.category = req.body.category
    producto.description = req.body.description
    // producto.imagen = req.file.filename;

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
    res.redirect(`/products/${id}/edit`)
  },
  deleteProduct: (req, res) => {
    const id = Number(req.params.id)
    const productsFiltered = products.filter((p) => p.id !== id)
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(productsFiltered, null, " ")
    )
    return res.redirect("/")
  },
}

module.exports = controller
