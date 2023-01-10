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
    tablename: "user_categories",
    timestamps: false,
  };

  const Category = sequelize.define("Category", columns, config);

  return Category;
};
