const express = require("express");
const PatientController = require("../controllers/PatientController");

const router = express.Router();

/*
Routes of my application
*/
router.get("/", PatientController.homePage);
router.get("/list", PatientController.index);
router.post("/create", PatientController.create);
router.get("/list/:id", PatientController.findById);
router.patch("/update/:id", PatientController.updateById);
router.delete("/delete/:id", PatientController.deleteById);

module.exports = router;
