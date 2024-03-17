const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const User = require("../models/user");

const authenticate = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      return res.status(401).json("Not authorized");
    }
    if (!token) {
      return res.status(401).json("Not authorized");
    }

    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(401).json("Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json("Not authorized");
  }
};

module.exports = authenticate;
