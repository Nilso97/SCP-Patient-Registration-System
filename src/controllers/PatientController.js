const Patient = require("../models/Patient");

module.exports = {
  async homePage(req, res) {
    await res.json({
      message: "SCP - Sistema de Cadastro de Pacientes",
    });
  },

  async index(req, res) {
    try {
      const patients = await Patient.find();

      return res.status(200).json(patients);
    } catch (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
  },

  async create(req, res) {
    const patient = new Patient({
      patient_data: {
        patient_name: req.body.patient_data.patient_name,
        birth_date: req.body.patient_data.birth_date,
        sex: req.body.patient_data.sex,
        email: req.body.patient_data.email,
        address: req.body.patient_data.address,
      },

      information: {
        symptons: req.body.information.symptons,
        health_insurance: req.body.information.health_insurance,
        more_information: req.body.information.more_information,
      },

      schedule_appointment: {
        consultation_date: req.body.schedule_appointment.consultation_date,
        appointment_time: req.body.schedule_appointment.appointment_time,
      },
    });

    try {
      await patient.save();

      res.status(201).json({
        message: "Registro adicionado com sucesso!",
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message,
      });
    }
  },

  async findById(req, res) {
    try {
      const patient = await Patient.findById(req.params.id);

      return res.status(200).json(patient);
    } catch {
      return res.status(500).json({
        error: "Registro não encontrado em nosso Banco de Dados!",
      });
    }
  },

  async updateById(req, res) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const options = { new: true };

      await Patient.findByIdAndUpdate(id, updateData, options);

      return res.status(200).json({
        message: "Registro atualizado com sucesso!",
      });
    } catch {
      res.status(400).json({
        error: "Registro não encontrado em nosso Banco de Dados!",
      });
    }
  },

  async deleteById(req, res) {
    try {
      const id = req.params.id;
      const data = await Patient.findByIdAndDelete(id);

      return res.status(200).json({
        message: `Registro do paciente: ${data.patient_name} foi deletado com sucesso!`,
      });
    } catch {
      res.status(400).json({
        error: "Registro não encontrado em nosso Banco de Dados!",
      });
    }
  },
}
