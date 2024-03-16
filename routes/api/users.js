const { Router } = require("express");
const { register, login } = require("../../controllers/users");

const router = Router();

router.get("/", (req, res) => {
  return res.json("Hello world!!!");
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;
