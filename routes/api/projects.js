const { Router } = require("express");
const { createProject } = require("../../controllers/projects");
const authenticate = require("../../middlewares/authenticate");

const router = Router();

router.post("/create", authenticate, createProject);

module.exports = router;
