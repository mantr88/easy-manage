const { ctrlWrapper, HttpError } = require("../../helpers");
const Task = require("../../models/task");
const User = require("../../models/user");

const getAllTasksOfProject = ctrlWrapper(async (req, res) => {
  const { id } = req.user;
  const { projectId } = req.params;
  if (!id) {
    throw HttpError(400, "Missing user");
  }

  const tasks = await Task.findAll({
    where: { projectId },
    include: [
      {
        model: User, // Assuming you have a User model defined
        as: "users", // The alias used in the association
        through: { attributes: [] }, // Exclude the through table attributes from the result
        attributes: ["id"], // Only include the 'id' field of the 'users'
      },
    ],
  });

  if (!tasks) {
    throw HttpError(404, "Not found tasks in this project");
  }

  return res.status(200).json({ tasks });
});

module.exports = getAllTasksOfProject;
