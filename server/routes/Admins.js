const express = require("express");
const router = express.Router();
const { kl_admin } = require("../models");
const bcrypt = require("bcrypt");

const {validationToken} = require("./middleware");

router.get("/", async (req, res) => {
  const listaAdmin = await kl_admin.findAll();
  res.json(listaAdmin);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const admin = await kl_admin.findByPk(id);
  res.json(admin);
});


router.post("/", validationToken, async (req, res) => {
  const admin = req.body;
  const exist = await kl_admin.findOne({ where: { usuario: admin.usuario } });
  if (!exist) {
    try {
      await kl_admin.create({
        usuario: admin.usuario,
        contrasena: admin.contrasena,
        rol: admin.rol,
      });
      return res.status(201).json(admin); // 201 Created
    } catch (err) {
      return res.status(500).json({ error: "Error al crear admin" }); // 500 Internal Server Error
    }
  } else {
    return res.status(409).json({ error: "usuario ya existe" }); // 409 Conflict
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await kl_admin.destroy({where: {id: id,},});
  return res.json("admin eliminado con exito");
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; 
  const admin = req.body;
  await kl_admin.update({ id_admin: admin.id_admin, usuario: admin.usuario, contrasena: admin.contrasena, },{where: {id: id,},},);

});

module.exports = router;