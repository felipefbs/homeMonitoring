const express = require("express");
const SensorController = require("./controllers/SensorController");

const routes = express.Router();

routes.post("/sensors", SensorController.store);

routes.get("/sensors", SensorController.index);

module.exports = routes;
