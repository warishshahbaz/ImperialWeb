//  *********      SONU VERMA         **********           SONU VERMA          ***********             //

const path = require('path'); 
require('dotenv').config({ path: path.join(__dirname, '.env') });

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const path = require("path");
var cors = require("cors");
const app = express();
const { dbConnection } = require("./config/db");
const { server } = require("./config/server");
const careerRoute = require("./routes/careerRoute");
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

dbConnection();
server(app);
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/career", careerRoute);

app.get("/", (req, res) => {
  res.status(200).send("App is working...");
});

app.use("*", (req, res) => {
  res.status(404).send("Not found...");
});

module.exports.app = app;

