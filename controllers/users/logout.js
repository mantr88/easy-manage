const { ctrlWrapper, HttpError } = require("../../helpers");
const User = require("../../models/user");

const logout = ctrlWrapper(async (req, res) => {
  const { id } = req.user;
  const user = await User.findOne({ where: { id } });
  if (!user) throw HttpError(500, "Failed to log out.");

  res.clearCookie("jwt");
  res.status(204).json({ message: "No Content" });
});

module.exports = logout;
