const express = require("express");
const { insertAppointment } = require("../controller/AppointmentController");
const requireRegistrarLogin = require("../Middleware/requireRegistrarLogin");
const router = express.Router();

router.post("/insertApp", insertAppointment);

module.exports = router;
