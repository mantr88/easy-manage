const createTask = require("./createTask");
const getUserTasks = require("./getUserTasks");
const changeCategoryOfTaskOfUser = require("./changeCategoryOfTaskOfUser");
const deleteTask = require("./deleteTask");
const getAllTasksOfProject = require("./getAllTasksOfProject");

module.exports = {
  createTask,
  getUserTasks,
  changeCategoryOfTaskOfUser,
  deleteTask,
  getAllTasksOfProject,
};
