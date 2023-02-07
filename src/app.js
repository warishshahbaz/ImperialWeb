//  *********      SONU VERMA         **********           SONU VERMA          ***********             //

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { dbConnection } = require("./config/db");
const { server } = require("./config/server");
const careerRoute = require("./routes/careerRoute");

dbConnection();
server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/career", careerRoute);

app.get("/test", (req, res) => {
  res.send("App is working...");
});

app.use("/", (req, res) => {
  res.send("Root is working...");
});