const { Router } = require("express");
const {
  createProject,
  getProjects,
  getAllProjects,
  updateProject,
  deleteProject,
} = require("../../controllers/projects");
const authenticate = require("../../middlewares/authenticate");

const router = Router();

router.post("/create", authenticate, createProject);
router.get("/", authenticate, getProjects);
router.get("/all", authenticate, getAllProjects);
router.patch("/:id", authenticate, updateProject);
router.delete("/:id", authenticate, deleteProject);

module.exports = router;
