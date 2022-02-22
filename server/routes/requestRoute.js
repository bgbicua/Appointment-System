const express = require("express");
const {
  insertRequest,
  getAdminssiontRequest,
  getStudentRequest,
  sendQr,
  rejectRequest
} = require("../controller/RequestController");

const router = express.Router();

router.post("/insertRequest", insertRequest);
router.get("/getStudentRequest", getStudentRequest);
router.get("/getAdminssiontRequest", getAdminssiontRequest);
router.post("/sendQR", sendQr);
router.post("/rejectRequest", rejectRequest);
module.exports = router;
