const { Sequelize } = require("sequelize");

const { DB_HOST, DB_PORT, DB_USER_NAME, DB_PASSWORD, DB_NAME } = process.env;

module.exports = new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mariadb",
});
