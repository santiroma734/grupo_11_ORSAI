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
      field: "first_name",
    },
    lastName: {
      type: dataTypes.STRING,
      allowNull: false,
      field: "last_name",
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
      field: "id_user_category",
    },
    createdAt: {
      type: "TIMESTAMP",
      allowNull: false,
      field: "created_at",
    },
    updatedAt: {
      type: "TIMESTAMP",
      allowNull: false,
      field: "updated_at",
    },
  };

  const config = {
    tableName: "users",
    timestamps: true,
  };
  const User = sequelize.define("User", columns, config);

  User.associate = (models) => {
    User.belongsTo(models.UserCategory, {
      as: "category",
      foreignKey: "id_user_category",
    });
  };

  return User;
};
