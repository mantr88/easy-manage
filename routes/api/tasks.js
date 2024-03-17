const { Router } = require("express");
const { createTask, getUserTasks } = require("../../controllers/tasks");
const { adminManagerAuth, authenticate } = require("../../middlewares");

const router = Router();

router.post("/create", adminManagerAuth, createTask);
router.get("/", authenticate, getUserTasks);

module.exports = router;
