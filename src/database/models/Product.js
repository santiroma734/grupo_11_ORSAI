module.exports = (sequelize, dataTypes) => {
  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    idCategory: {
      type: dataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: "id_category",
    },
  };
  const config = {
    tableName: "products",
    timestamps: false,
  };
  const Product = sequelize.define("Product", columns, config);

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "category",
      foreignKey: "id_category",
    });
  };

  return Product;
};
