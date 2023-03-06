const careerModel = require("../models/careerModel");
const contactModel = require("../models/contact");
const { SendEmail } = require("../utils/mail");
const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const saveApply = async function (req, res, next) {
  try {
    const resumeName = req.files[0].originalname;
   // console.log(req.files);
    fs.writeFileSync(
      path.join(__dirname, `../public/resume/${resumeName}`),
      req.files[0].buffer
    );

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let data = await careerModel.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      resume: process.env.BASE_URL + "/resume/" + resumeName,
      message: req.body.message,
    });
    // await SendEmail(1, `
    
    // url : ${data.resume}

    // `);
    return res.status(201).send({
      status: true,
      message: "Applied successfull.",
      data: "",
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message,
      data: null,
    });
  }
};
const allApply = async function (req, res, next) {
  try {
    console.log(req.body);

    const apply = await careerModel.find();
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
const contact = async function (req, res, next) {
  try {
    const apply = await contactModel.create(req.body);
    const htmL = 
    `<h4>
    name : ${req.body.name} 
    email : ${req.body.email} 
    phone : ${req.body.phone} 
    message : ${req.body.message} 
    </h4>`
    // await SendEmail(1, htmL);

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
const getcontact = async function (req, res, next) {
  try {
    //console.log(req.body)

    const apply = await contactModel.find();
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

module.exports = {
  saveApply,
  allApply,
  contact,
  getcontact,
};
