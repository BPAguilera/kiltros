const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { kl_alumno } = require("../models");
const {validationToken} = require("./middleware")

const {sign} = require("jsonwebtoken");


router.post("/", async (req, res) => {
  const {usuario,contrasena} = req.body;
  const user = await kl_alumno.findOne({where: {nombre: usuario}});
  if(!user) return res.json({error: "El usuario no existe"});
  bcrypt.compare(contrasena, user.contrasena).then((match)=>{
    if (!match) return res.json({error: "Contrasena o usuario incorrecto"});

    const accessToken = sign({usuario: user.nombre, id: user.id, rol: user.rol},
      "secretoimportante");
    // const authtoken = {usuario: usuario, id: user.id, rol: user.rol, state: true};
    // console.log(authtoken);
    
    return res.json({token: accessToken, usuario: user.nombre,id: user.id, rol: user.rol, id_curso: user.id_curso });

  })
    
});

module.exports = router;