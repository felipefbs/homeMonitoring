const express = require("express");
const SensorController = require("./controllers/SensorController");
const SensorsController = require("./controllers/SensorsController");

const routes = express.Router();

routes
  .route("/sensors")
  .get(SensorController.index)
  .post(SensorController.store);

routes.get("/", SensorsController.index);

module.exports = routes;
