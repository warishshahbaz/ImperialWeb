const express = require('express');
const router = express.Router();
 const {saveApply , allApply}= require("../controllers/careerController")
 const { body, validationResult } = require('express-validator');



router.post("/apply",
body('name').trim().not().isEmpty().escape().withMessage('Invalid Name'),
body('phone').trim().not().isEmpty().escape().isLength({ min: 10,max:10 }).isInt().withMessage('Invalid Phone'),
body('email').trim().not().isEmpty().escape().isEmail().withMessage('Invalid Email'),
saveApply )


router.get("/apply", allApply)

module.exports = router;
