const mongoose = require("mongoose");

/*
MongoDB Schemas
*/
const dataSchema = new mongoose.Schema({
  patient_name: {
    required: true,
    type: String,
  },

  birth_date: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
  },

  address: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Patient", dataSchema);
