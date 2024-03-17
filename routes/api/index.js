const { Router } = require("express");
const usersRouter = require("./users");
const projectsRouter = require("./projects");
const tasksRouter = require("./tasks");

const router = Router();

router.use("/users", usersRouter);
router.use("/projects", projectsRouter);
router.use("/tasks", tasksRouter);
router.use(
  "/",
  router.get("/", (req, res) => {
    res.status(200).json({ message: "App is leave" });
  })
);

module.exports = router;
