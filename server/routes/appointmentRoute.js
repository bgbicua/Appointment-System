const express = require("express");
const {
  insertAppointment,
  getAppointment
} = require("../controller/AppointmentController");
const requireRegistrarLogin = require("../Middleware/requireRegistrarLogin");
const router = express.Router();

router.post("/insertApp", insertAppointment);
router.get("/getApp", getAppointment);
module.exports = router;
