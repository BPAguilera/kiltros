const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { kl_admin } = require("../models");
const { validationToken } = require("./middleware")

const { sign } = require("jsonwebtoken");


router.post("/", async (req, res) => {
  const { usuario, contrasena } = req.body;
  const user = await kl_admin.findOne({ where: { usuario: usuario } });
  if (!user) return res.json({ error: "El usuario no existe" });
  if (contrasena === user.contrasena){
    const accessToken = sign({ usuario: user.usuario, id: user.id, rol: user.rol },
      "secretoimportante");
    // const authtoken = { usuario: user.usuario, id: user.id, rol: user.rol, status: true};
    // console.log(authtoken);
    return res.json({ token: accessToken, usuario: user.usuario, id: user.id, rol: user.rol, id_curso: 0, });
  } 
  

});

router.get('/auth', validationToken, (req, res) => {
  res.json(req.user)

})



module.exports = router;