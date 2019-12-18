const Sensor = require("../models/Sensor");

module.exports = {
  async store(req, res) {
    const { ip, value } = req.body;

    try {
      const sensor = await Sensor.create({ ip, value });
      return res.json({ sensor });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  async index(req, res) {
    const { ip } = req.query;

    const values = await Sensor.find({ ip: ip });

    return res.json(values);
  }
};
