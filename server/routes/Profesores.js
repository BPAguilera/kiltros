const express = require("express");
const router = express.Router();
const { kl_profesor } = require("../models");

router.get("/", async (req, res) => {
  const listaProfesor = await kl_profesor.findAll();
  res.json(listaProfesor);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const profesor = await kl_profesor.findByPk(id);
  res.json(profesor);
});

router.post("/", async (req, res) => {
  const profesor = req.body;
  await kl_profesor.create(profesor);
  res.json(profesor);
});


router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await kl_profesor.destroy({where: {id: id,},});
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; 
  const profesor = req.body;
  await kl_profesor.update({ id_profesor: profesor.profesor, nombre: profesor.nombre, rut: profesor.rut, },{where: {id: id,},},);
});

module.exports = router;