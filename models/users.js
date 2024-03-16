const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  role: {
    type: DataTypes.ENUM,
    values: ["ADMIN", "MANAGER", "EXECUTANT"],
    defaultValue: "EXECUTANT",
  },
});

module.exports = User;
