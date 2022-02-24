const express = require("express");
const {
  insertRequest,
  getAdminssiontRequest,
  getStudentRequest
} = require("../controller/RequestController");

const router = express.Router();

router.post("/insertRequest", insertRequest);
router.get("/getStudentRequest", getStudentRequest);
router.get("/getAdminssiontRequest", getAdminssiontRequest);
module.exports = router;
