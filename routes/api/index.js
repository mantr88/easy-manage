const { Router } = require("express");
const usersRouter = require("./users");
const projectsRouter = require("./projects");

const router = Router();

router.use("/users", usersRouter);
router.use("/projects", projectsRouter);

module.exports = router;
