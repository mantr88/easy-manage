const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");

const JWT_SECRET = process.env.JWT_SECRET;

const login = ctrlWrapper(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) throw HttpError(422);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw HttpError(401);
  }

  const maxAge = 24 * 60 * 60;
  const token = jwt.sign(
    { id: user.id, name: user.name, role: user.role },
    JWT_SECRET,
    {
      expiresIn: maxAge, // 24hrs in sec
    }
  );

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: maxAge * 1000, // 24hrs in ms
  });

  return res.status(200).json({ message: "Logged in" });
});

module.exports = login;
