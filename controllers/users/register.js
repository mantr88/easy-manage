const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const User = require("../../models/user");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(409).json({ message: "Email in use" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

    const maxAge = 24 * 60 * 60;
    const token = jwt.sign(
      { id: newUser.id, name: newUser.name, role: newUser.role },
      JWT_SECRET,
      {
        expiresIn: maxAge, // 24hrs in sec
      }
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // 24hrs in ms
    });

    return res.status(201).json({
      message: "New user successfully created!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
