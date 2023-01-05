module.exports = (sequelize, dataTypes) => {
  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    idUserCategory: {
      type: dataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };
  const User = sequelize.define("Users", columns, config);

  User.associate = (models) => {
    User.belongsTo(models.UserCategory, {
      as: "categories",
      foreignKey: "id_user_category",
    });
  };
}
