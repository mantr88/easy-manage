const { ctrlWrapper, HttpError } = require("../../helpers");
const Project = require("../../models/project");

const deleteProject = ctrlWrapper(async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  if (!user) {
    throw HttpError(400, "Missing user");
  }

  const prgForCheckOwner = await Project.findOne({ where: { id } });

  if (!prgForCheckOwner) {
    throw HttpError(404, "Project not found");
  }

  if (prgForCheckOwner.ownerId !== user.id) {
    throw HttpError(400, "You are not the owner of this project");
  }

  const project = await Project.destroy({ where: { id } });

  if (!project) {
    throw HttpError(404, "Project not found for delete");
  }

  res.json({ message: "Project deleted successfully" });
});

module.exports = deleteProject;
