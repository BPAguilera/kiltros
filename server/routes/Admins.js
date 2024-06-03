const express = require("express");
const router = express.Router();
const { kl_admin } = require("../models");

router.get("/", async (req, res) => {
  const listaAdmin = await kl_admin.findAll();
  res.json(listaAdmin);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const admin = await kl_admin.findByPk(id);
  res.json(admin);
});


router.post("/", async (req, res) => {
  const admin = req.body;
  await kl_admin.create(admin);
  res.json(admin);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await kl_admin.destroy({where: {id: id,},});
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; 
  const admin = req.body;
  await kl_admin.update({ id_admin: admin.id_admin, usuario: admin.usuario, contrasena: admin.contrasena, },{where: {id: id,},},);
});

module.exports = router;