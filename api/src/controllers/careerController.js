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

    const htmL = `<h4>
    name : ${req.body.name} ,
    email : ${req.body.email} ,
    phone : ${req.body.phone} ,
    resume : ${data.resume} 
    </h4>`;

    const mailLog = await SendEmail(req.body.email, htmL, "Job Application");
    // console.log("mailLog       ", mailLog);

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
    const body = {
      name: req.body.name || "",
      email: req.body.email || "",
      phone: req.body.phone || "",
      message: req.body.message || "",
    };
    const apply = await contactModel.create(body);
    const htmL = `<h4>
    name : ${body.name} ,
    email : ${body.email} ,
    phone : ${body.phone} ,
    message : ${body.message} 
    </h4>`;
    const mailLog = await SendEmail(body.email, htmL, "Contact Us");
    // console.log("mailLog       ", mailLog);
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
