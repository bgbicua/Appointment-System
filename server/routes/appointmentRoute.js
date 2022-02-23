const express = require("express");
const {
  insertAppointment,
  getAppointment,
  getAppointmentCount,
  getAppointmentToday
} = require("../controller/AppointmentController");
const requireRegistrarLogin = require("../Middleware/requireRegistrarLogin");
const router = express.Router();

router.post("/insertApp", insertAppointment);
router.get("/getApp", getAppointment);
router.get("/getAppCount", getAppointmentCount);
router.get("/getAppToday", getAppointmentToday);
module.exports = router;
