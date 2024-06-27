const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { kl_admin } = require("../models");
const {validationToken} = require("./middleware")

const {sign} = require("jsonwebtoken");


router.post("/", async (req, res) => {
  const {usuario,contrasena} = req.body;
  const user = await kl_admin.findOne({where: {usuario: usuario}});
  bcrypt.compare(contrasena, user.contrasena).then((match)=>{
    if (!match) return res.json({error: "Contrasena o usuario incorrecto"});

    const accessToken = sign({usuario: user.usuario, id: user.id, rol: user.rol},
      "secretoimportante");

    return res.json(accessToken);

  })
    
});

router.get('/auth',validationToken, (req, res)=>{
  res.json(req.user)

})



module.exports = router;