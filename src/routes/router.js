const express = require("express");
const PatientControllers = require("../controllers/PatientControllers");

const router = express.Router();

/*
Routes of my application
*/
router.get("/", PatientControllers.homePage);
router.get("/list", PatientControllers.index);
router.post("/create", PatientControllers.create);
router.get("/list/:id", PatientControllers.findById);
router.patch("/update/:id", PatientControllers.updateById);
router.delete("/delete/:id", PatientControllers.deleteById);

module.exports = router;
