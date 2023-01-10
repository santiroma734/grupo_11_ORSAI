module.exports = (sequelize, dataTypes) => {
  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: dataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    idProducts: {
      type: dataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    createdAt: {
      type: dataTypes.INTEGER,
      field: "created_at",
    },
    updatedAt: {
      type: dataTypes.INTEGER,
      field: "updated_at",
    },
    quantity: {
      type: dataTypes.INTEGER,
    },
  };
  const config = {
    tablename: "orders",
    timestamps: false,
  };
  const Order = sequelize.define("Order", columns, config);

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      as: "categories",
      foreignKey: "id_user",
    });

    Order.belongsTo(models.Product, {
      as: "products",
      foreignKey: "id_product",
    });
  };
};
