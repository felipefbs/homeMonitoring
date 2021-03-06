require("dotenv/config");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.SERVER_USER}:${process.env.SERVER_PASSWD}@omnistack-it8hx.mongodb.net/database?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3001);
