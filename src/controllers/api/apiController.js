const db = require("../../database/models");
const Products = db.Product;
const Users = db.User;
const Categories = db.Category;

const controller = {
  getAllProducts: async (req, res) => {
    try {
      let products = await Products.findAll({
        attributes: ["id", "name", "description", "price", "image"],
        include: { model: db.Category, as: "category" },
      });

      let countByCategory = {};

      products = products.map((product) => {
        if (!countByCategory[product.category.name]) {
          countByCategory[product.category.name] = 0;
        }
        countByCategory[product.category.name]++;

        const modifiedProduct = {
          ...product.dataValues,
          category: product.category.name,
          detail: `http://localhost:3030/api/products/${product.id}`,
        };
        return modifiedProduct;
      });

      res.status(200).json({
        count: products.length,
        countByCategory,
        products,
      });
    } catch (err) {
      res.json(err);
    }
  },
  getProduct: async (req, res) => {
    const id = +req.params.id;
    try {
      let product = await Products.findByPk(id);
      product = {
        ...product.dataValues,
        image: `http://localhost:3030/imgs/products/${product.image}`,
      };
      res.status(200).json(product);
    } catch (err) {
      res.json(err);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      let users = await Users.findAll({
        attributes: [
          "id",
          "firstName",
          "lastName",
          "email",
          "image",
          "createdAt",
        ],
        include: { model: db.UserCategory, as: "category" },
        order: [["created_at", "ASC"]],
      });

      users = users.map((user) => {
        const modifiedUser = {
          ...user.dataValues,
          detail: `http://localhost:3030/api/users/${user.id}`,
        };
        return modifiedUser;
      });

      res.status(200).json({ count: users.length, users });
    } catch (err) {
      res.json(err);
    }
  },
  getUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await Users.findByPk(id);
      res.status(200).json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: `http://localhost:3030/imgs/users/${user.image}.jpg`,
        phone: user.phone,
      });
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = controller;
