//  *********      SONU VERMA         **********           SONU VERMA          ***********             //

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const serverless = require("serverless-http")
const app = express();
const { dbConnection } = require("./config/db");
const careerRoute = require("./routes/careerRoute");
const router = express.Router();
const careerModel = require("./models/careerModel");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use("/career", careerRoute);

router.get("/", (req, res) => {
  res.send("App is working...");
});


const allApply = async function (req, res, next) {
  try {
   const apply =  await careerModel.find()
    return res.status(201).send({
      status: true,
      message: "Query executed successfully.",
      data: apply,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

router.get("/c/apply",allApply)


app.use("/.netlify/functions/api", router);
app.use("/.netlify/functions/api/career", careerRoute);

dbConnection();
module.exports.handler = serverless(app)