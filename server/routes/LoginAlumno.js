const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { kl_alumno } = require("../models");
const {validationToken} = require("./middleware")

const {sign} = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { usuario, contrasena } = req.body;
  const user = await kl_alumno.findOne({ where: { nombre: usuario } });

  if (!user) {
    return res.json({ error: "Error en el usuario o contraseña" });
  }

  if (contrasena !== user.contrasena) {
    return res.json({ error: "Error en el usuario o contraseña" });
  }

  const accessToken = sign({usuario: user.nombre, id: user.id, rol: user.rol, id_curso: user.id_curso,},"secretoimportante");

  return res.json({token: accessToken, usuario: user.nombre, id: user.id, rol: user.rol, id_curso: user.id_curso,});
});

module.exports = router;