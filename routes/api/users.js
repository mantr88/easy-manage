const { Router } = require("express");
const { register, login, updateRole } = require("../../controllers/users");
const authenticate = require("../../middlewares/authenticate");

const router = Router();

router.get("/", (req, res) => {
  return res.json("Hello world!!!");
});

router.post("/register", register);
router.post("/login", login);
router.patch("/update-role", authenticate, updateRole);

module.exports = router;
