module.exports = (sequelize, dataTypes) => {
  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  const config = {
    tableName: "categories",
    timestamps: false,
  };

  const Category = sequelize.define("Category", columns, config);

  // Category.associate = (models) => {
  //   Category.belongsTo(models.Product, {
  //     as: "products",
  //     // foreignKey: "id_product",
  //   });
  // };

  return Category;
};
