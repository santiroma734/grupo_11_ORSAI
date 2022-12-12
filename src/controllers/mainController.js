const path = require("path")
const fs = require("fs")
const productsFilePath = path.join(__dirname, "../data/products.json")
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"))

const controller = {
  index: (req, res) => {
    res.render("home", { products })
  },
}

module.exports = controller
