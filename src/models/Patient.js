const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  patient_data: {
    patient_name: {
      required: true,
      type: String,
    },
  
    birth_date: {
      required: true,
      type: String,
    },
  
    sex: {
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
  },

  information: {
    symptons: {
      required: true,
      type: String,
    },

    health_insurance: {
      required: true,
      type: String,
    },

    more_information: {
      required: false,
      type: String,
    },
  },

  schedule_appointment: {
    consultation_date: {
      required: true,
      type: String,
    },

    appointment_time: {
      required: true,
      type: String,
    },
  },
});

module.exports = mongoose.model("Patient", dataSchema);
