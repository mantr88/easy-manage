const { ctrlWrapper, HttpError } = require("../../helpers");
const Project = require("../../models/project");

const updateProject = ctrlWrapper(async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const { title, description } = req.body;

  if (!user) {
    throw HttpError(400, "Missing user");
  }

  if (!req.body) {
    throw HttpError(400, "Missing body of request");
  }

  if (!title || !description) {
    throw HttpError(400, "Missing field");
  }

  const prgForCheckOwner = await Project.findOne({ where: { id } });

  if (!prgForCheckOwner) {
    throw HttpError(404, "Project not found");
  }

  if (prgForCheckOwner.ownerId !== user.id) {
    throw HttpError(400, "You are not the owner of this project");
  }

  const project = await Project.update(
    { title, description },
    { where: { id } }
  );

  if (!project) {
    throw HttpError(404, "Project not found for update");
  }

  res.status(200).json({ message: "Project updated successfully" });
});

module.exports = updateProject;
