const globalErrorHandler = require("./globalErrorHandler");
const missingRouteHandler = require("./missingRouteHandler");
const adminManagerAuth = require("./adminManagerAuth");
const authenticate = require("./authenticate");

module.exports = {
  globalErrorHandler,
  missingRouteHandler,
  adminManagerAuth,
  authenticate,
};
