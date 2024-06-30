const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { kl_profesor } = require("../models");
const {validationToken} = require("./middleware")

const {sign} = require("jsonwebtoken");


router.post("/", async (req, res) => {
  const {usuario,contrasena} = req.body;
  const user = await kl_profesor.findOne({where: {nombre: usuario}});
  if(!user) return res.json({error: "El usuario no existe"});
  const accessToken = sign({usuario: user.nombre, id: user.id, rol: user.rol, id_curso: 0},
    "secretoimportante");
  // const authtoken = {usuario: usuario, id: user.id, rol: user.rol, state: true};
  // console.log(authtoken);
  
  return res.json({token: accessToken, usuario: user.nombre,id: user.id, rol: user.rol, id_curso: 0});
});

module.exports = router;