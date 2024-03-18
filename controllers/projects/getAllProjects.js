const { ctrlWrapper, HttpError } = require("../../helpers");
const Project = require("../../models/project");

const getAllProjects = ctrlWrapper(async (req, res) => {
  const { id } = req.user;
  if (!id) {
    throw HttpError(400, "Missing user");
  }

  const projects = await Project.findAll();

  if (!projects) {
    throw HttpError(404, "Not found projects");
  }

  return res.status(200).json({ projects });
});

module.exports = getAllProjects;
