//  *********      SONU VERMA         **********           SONU VERMA          ***********             //

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const serverless = require("serverless-http")
const app = express();
const { dbConnection } = require("./config/db");
const careerRoute = require("./routes/careerRoute");
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use("/career", careerRoute);

router.get("/", (req, res) => {
  res.send("App is working...");
});

app.use("/.netlify/functions/api", router);
app.use("/.netlify/functions/api/career", careerRoute);

dbConnection();
module.exports.handler = serverless(app)