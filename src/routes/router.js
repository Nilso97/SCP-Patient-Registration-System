const express = require("express");
const PatientController = require("../controllers/PatientController");

const router = express.Router();

router.get("/scp/", PatientController.homePage);
router.get("/scp/pacientes/", PatientController.index);
router.post("/scp/pacientes/", PatientController.create);
router.get("/scp/pacientes/:id", PatientController.findById);
router.patch("/scp/pacientes/:id", PatientController.updateById);
router.delete("/scp/pacientes/:id", PatientController.deleteById);

module.exports = router;
