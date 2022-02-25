const mongoose = require("mongoose");

const Form = mongoose.Schema({
  formName: { type: String, required: true, unique: true },
  field: [],
});

module.exports = mongoose.model("Form", Form);
