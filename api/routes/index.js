const express = require("express");
const router = express.Router();
const contacto = require("./contacto");

router.use("/contacto", contacto);

module.exports = router;
