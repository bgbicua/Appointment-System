const express = require("express");
const requireLogin = require("../Middleware/requireRegistrarLogin");
const router = express.Router();

const { Register, Signin, protected } = require("../controller/Auth");

router.post("/register", Register);
router.get("/protected", requireLogin, protected);
router.post("/login", Signin);

module.exports = router;
