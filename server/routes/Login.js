const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { kl_admin } = require("../models");
const { validationToken } = require("./middleware")

const { sign } = require("jsonwebtoken");


router.post("/", async (req, res) => {
  const { usuario, contrasena } = req.body;
  const user = await kl_admin.findOne({ where: { usuario: usuario } });
  
  if (!user) {
    return res.json({ error: "Error en el usuario o contraseña" });
  } 
  
  if (contrasena !== user.contrasena) {
    return res.json({ error: "Error en el usuario o contraseña" });
  }

  const accessToken = sign({ usuario: user.usuario, id: user.id, rol: user.rol }, "secretoimportante");

  return res.json({ token: accessToken, usuario: user.usuario, id: user.id, rol: user.rol, id_curso: 0 });
});

router.get('/auth', validationToken, (req, res) => {
  res.json(req.user)

})



module.exports = router;