const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
  ip: String,
  value: String,
  receivedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Sensor", SensorSchema);
