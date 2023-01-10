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

  const UserCategory = sequelize.define("UserCategory", columns, config);

  return UserCategory;
};
