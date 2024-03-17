const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Project = require("./project");
const User = require("./user");

const Task = sequelize.define("task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  deadline: { type: DataTypes.DATE },
  priority: {
    type: DataTypes.ENUM,
    values: ["low", "medium", "high"],
    defaultValue: "low",
  },
  category: {
    type: DataTypes.ENUM,
    values: ["to-do", "in-progress", "postponed", "done"],
    defaultValue: "to-do",
  },
});

Task.belongsTo(Project, { foreignKey: "projectId", as: "project" });

Project.hasMany(Task, { foreignKey: "projectId", as: "tasks" });

Task.belongsToMany(User, {
  through: "executantTasks",
  foreignKey: "taskId",
  as: "users",
});
User.belongsToMany(Task, {
  through: "executantTasks",
  foreignKey: "userId",
  as: "tasks",
});

module.exports = Task;
