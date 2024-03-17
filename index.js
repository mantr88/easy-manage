const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./db");
const routes = require("./routes/api/index");
const { missingRouteHandler, globalErrorHandler } = require("./middlewares");
const PORT = process.env.PORT || 8080;
const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", routes);

app.use(missingRouteHandler);
app.use(globalErrorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server started on port 3022");
});

start();
