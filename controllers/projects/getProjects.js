const { ctrlWrapper, HttpError } = require("../../helpers");
const Project = require("../../models/project");

const getProjects = ctrlWrapper(async (req, res) => {
  const { id } = req.user;
  if (!id) {
    throw HttpError(400, "Missing user");
  }

  const projects = await Project.findAll({ where: { ownerId: id } });

  if (!projects) {
    throw HttpError(404, "Not found projects for the user");
  }

  return res.status(200).json({ projects });
});

module.exports = getProjects;
