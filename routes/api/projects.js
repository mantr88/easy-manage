const { Router } = require("express");
const {
  createProject,
  getProjects,
  getAllProjects,
} = require("../../controllers/projects");
const authenticate = require("../../middlewares/authenticate");

const router = Router();

router.post("/create", authenticate, createProject);
router.get("/", authenticate, getProjects);
router.get("/all", authenticate, getAllProjects);

module.exports = router;
