const { Router } = require("express");
const {
  createProject,
  getProjects,
  getAllProjects,
  updateProject,
  deleteProject,
} = require("../../controllers/projects");
const { adminManagerAuth } = require("../../middlewares");

const router = Router();

router.post("/create", adminManagerAuth, createProject);
router.get("/", adminManagerAuth, getProjects);
router.get("/all", adminManagerAuth, getAllProjects);
router.patch("/:id", adminManagerAuth, updateProject);
router.delete("/:id", adminManagerAuth, deleteProject);

module.exports = router;
