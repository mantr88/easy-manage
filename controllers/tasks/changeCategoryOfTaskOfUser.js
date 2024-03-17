const { ctrlWrapper, HttpError } = require("../../helpers");
const Task = require("../../models/task");
const User = require("../../models/user");

const changeCategoryOfTaskOfUser = ctrlWrapper(async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const { category } = req.body;

  if (!user) {
    throw HttpError(400, "Missing user");
  }

  if (!req.body) {
    throw HttpError(400, "Missing body of request");
  }

  if (!category) {
    throw HttpError(400, "Missing field");
  }

  const taskForCheckUserId = await Task.findOne({
    where: { id },
    include: [
      {
        model: User, // Assuming you have a User model defined
        as: "users", // The alias used in the association
        through: { attributes: [] }, // Exclude the through table attributes from the result
        attributes: ["id"], // Only include the 'id' field of the 'users'
      },
    ],
  });

  if (!taskForCheckUserId) {
    throw HttpError(404, "Task not found");
  }

  const isExecutor = taskForCheckUserId.users.some(
    (user) => user.id === req.user.id
  );

  if (!isExecutor) {
    throw HttpError(400, "You are not the executor of this task");
  }

  const task = await Task.update({ category }, { where: { id } });

  if (!task) {
    throw HttpError(404, "Task not found for update");
  }

  res.status(200).json({
    message: "Task category updated successfully",
  });
});

module.exports = changeCategoryOfTaskOfUser;
