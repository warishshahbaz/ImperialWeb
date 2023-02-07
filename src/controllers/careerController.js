const careerModel = require("../models/careerModel");
const { body, validationResult } = require('express-validator');

const saveApply = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await careerModel.create({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        resume:"req.body.resume",
        message:req.body.message,
    })
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

module.exports = {
    saveApply,
    allApply
};
