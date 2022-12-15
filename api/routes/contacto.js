const express = require("express");
const nodemailer = require("nodemailer");
const { Contacto } = require("../models");
const router = express.Router();

//Crear reserva:
router.post("/", (req, res) => {
  const { name, email, asunto, mensaje } = req.body;
  let testAccount = nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //gmail
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "nodemailer.1995@gmail.com", //gmail crearme un nuevo gmail de prueba
      pass: "tpuzmufiahlpvike", // gmail
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail({
    from: `${email}`,
    to: "micaelalozano95@gmail.com",
    subject: `${asunto}`,
    text: `${mensaje}, Este mail te lo mando: ${email}`,
  });

  Contacto.create({
    name,
    email,
    asunto,
    mensaje,
  }).then((data) => {
    res.status(201).send(data);
  });
});

module.exports = router;
