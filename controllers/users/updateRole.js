const { ctrlWrapper } = require("../../helpers");
const User = require("../../models/user");

const ADMIN_KEY = process.env.ADMIN_KEY;

const updateRole = ctrlWrapper(async (req, res, next) => {
  const { id } = req.user;
  const { role, code } = req.body;
  if (role && id) {
    switch (role) {
      case "ADMIN":
        if (code === ADMIN_KEY) {
          const targetUser = await User.findOne({ where: { id } });
          if (!targetUser) res.status(404).json("User not found");
          targetUser.role = "ADMIN";
          targetUser.save();
          return res.status(201).json({
            message: `Role of user ${targetUser.name} update successful. Now is ${targetUser.role}`,
          });
        } else {
          return res
            .status(400)
            .json({ message: "Do not enough access rights" });
        }
      case "MANAGER": {
        const userManager = await User.findOne({ where: { id } });
        if (!userManager) res.status(404).json("User not found");
        userManager.role = "MANAGER";
        userManager.save();
        return res.status(201).json({
          message: `Role of user ${userManager.name} update successful. Now is ${userManager.role}`,
        });
      }
      case "EXECUTANT": {
        const userExecutant = await User.findOne({ where: { id } });
        if (!userExecutant) res.status(404).json("User not found");
        userExecutant.role = "EXECUTANT";
        userExecutant.save();
        return res.status(201).json({
          message: `Role of user ${userExecutant.name} update successful. Now is ${userExecutant.role}`,
        });
      }
      default:
        res.status(400).json({ message: "Role or Id not present" });
        break;
    }
    next();
  } else {
    res.status(400).json({ message: "Role or Id not present" });
  }
});

module.exports = updateRole;
