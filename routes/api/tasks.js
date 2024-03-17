const { Router } = require("express");
const {
  createTask,
  getUserTasks,
  changeCategoryOfTaskOfUser,
  deleteTask,
  getAllTasksOfProject,
} = require("../../controllers/tasks");
const { adminManagerAuth, authenticate } = require("../../middlewares");

const router = Router();

router.post("/create", adminManagerAuth, createTask);
router.get("/", authenticate, getUserTasks);
router.get("/all/:projectId", authenticate, getAllTasksOfProject);
router.patch("/:id", authenticate, changeCategoryOfTaskOfUser);
router.delete("/:id", adminManagerAuth, deleteTask);
module.exports = router;
