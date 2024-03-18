const { ctrlWrapper, HttpError } = require("../../helpers");
const Task = require("../../models/task");

const deleteTask = ctrlWrapper(async (req, res) => {
  const user = req.user;
  const { id } = req.params;

  if (!user) {
    throw HttpError(400, "Missing user");
  }

  const task = await Task.destroy({ where: { id } });

  if (!task) {
    throw HttpError(404, "Task not found for delete");
  }

  res.status(200).json({ message: "Task deleted successfully" });
});

module.exports = deleteTask;
