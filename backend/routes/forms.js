const express = require("express");
const mongoose = require("mongoose");
var app = require("../app");
const forms = require("../models/forms");

const router = express.Router();

router.post("/addform", (req, res, next) => {
  console.log(req.body);
  let data = new forms({
    formName: req.body.name,
    field: req.body.fields,
  });

  data.save().then((form) => {
    console.log(form);
    res.status(201).json({
      message: "Form added succesfully!",
    });
  });
});

module.exports = router;
