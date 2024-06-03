const express = require("express");
const router = express.Router();
const { kl_curso } = require("../models");

router.get("/", async (req, res) => {
  const listaCurso = await kl_curso.findAll();
  res.json(listaCurso);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const curso = await kl_curso.findByPk(id);
  res.json(curso);
});

router.post("/", async (req, res) => {
  const curso = req.body;
  await kl_curso.create(curso);
  res.json(curso);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await kl_curso.destroy({where: {id: id,},});
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; 
  const curso = req.body;
  await kl_curso.update({ id_curso: curso.id_curso, nombre: curso.nombre, unidades: curso.unidades, id_profesor: curso.id_profesor},{where: {id: id,},},);
});

module.exports = router;