const Sensor = require("../models/Sensor");

module.exports = {
  async index(req, res) {
    const values = await Sensor.find({});

    const ips = values.map((value) => value.ip);
    const ipList = Array.from(new Set(ips));

    return res.json(ipList);
  }
};
