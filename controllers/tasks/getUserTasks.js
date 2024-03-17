const { ctrlWrapper, HttpError } = require("../../helpers");
const Task = require("../../models/task");
const User = require("../../models/user");

const getUserTasks = ctrlWrapper(async (req, res) => {
  const { id } = req.user;

  if (!id) {
    throw HttpError(400, "Missing user");
  }

  const tasks = await Task.findAll({
    include: [
      {
        model: User,
        as: "users",
        where: { id: id },
        through: { attributes: ["userId", "taskId"] },
        attributes: ["id"],
      },
    ],
  });

  if (!tasks) {
    throw HttpError(404, "Not found tasks for the user");
  }

  return res.status(200).json({ tasks });
});

module.exports = getUserTasks;
