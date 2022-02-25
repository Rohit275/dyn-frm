const express = require("express");
const mongoose = require("mongoose");
var app = require("../app");

const Users = require("../models/users");

const router = express.Router();

router.post("/login", (req, res, next) => {
  console.log(req.body);

  Users.findOne({
    Username: req.body.username,
    Password: req.body.password,
  }).then((user) => {
    console.log(user);
    if (user) {
      return res.status(200).json({ message: "Login Success", user: user });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  });
});

module.exports = router;
