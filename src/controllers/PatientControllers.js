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
      patient_name: req.body.patient_name,
      birth_date: req.body.birth_date,
      email: req.body.email,
      address: req.body.address,
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
};
