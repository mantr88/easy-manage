const { ctrlWrapper, HttpError } = require("../../helpers");
const Task = require("../../models/task");
const User = require("../../models/user");

const createTask = ctrlWrapper(async (req, res) => {
  const { id } = req.user;
  const body = req.body;

  if (!id) {
    throw HttpError(400, "Missing user");
  }

  const task = await Task.create({ ...body });

  if (!task) {
    throw HttpError(500, "Failed to create a task");
  }
  const user = await User.findByPk(id);
  if (!user) {
    throw HttpError(500, "Failed to create a task");
  }
  await task.addUser(user);
  return res.status(201).json({ message: "Task created successfully", task });
});

module.exports = createTask;
