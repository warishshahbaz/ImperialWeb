const express = require("express");
const router = express.Router();
const { saveApply, allApply , contact ,getcontact} = require("../controllers/careerController");
const { check } = require("express-validator");
const multer = require("multer");
const upload = multer({});

router.post(
  "/apply",
  upload.any(),
  check("name").trim().not().isEmpty().escape().withMessage("Invalid Name"),
  check("phone")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .isLength({ min: 10, max: 10 })
    .isInt()
    .isMobilePhone()
    .withMessage("Invalid Phone"),
  check("email")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .isEmail()
    .normalizeEmail()
    .withMessage("Invalid Email"),
  saveApply
);

router.get("/apply", allApply);
router.post("/contact", contact);
router.get("/contact", getcontact);

module.exports = router;





 