const { ctrlWrapper, HttpError } = require("../../helpers");
const Project = require("../../models/project");

const createProject = ctrlWrapper(async (req, res) => {
  const { id } = req.user;
  const body = req.body;

  if (!id) {
    throw HttpError(400, "Missing user");
  }

  const project = await Project.create({ ...body, ownerId: id });

  if (!project) {
    throw HttpError(500, "Failed to create a project");
  }
  return res
    .status(201)
    .json({ message: "Project created successfully", project });
});

module.exports = createProject;
