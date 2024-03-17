const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const User = require("./user");

const Project = sequelize.define("project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

Project.belongsTo(User, {
  foreignKey: "ownerId",
  as: "owner",
});

User.hasMany(Project, {
  foreignKey: "ownerId",
  as: "projects",
});

module.exports = Project;
