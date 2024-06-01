const express = require("express");
const router = express.Router();
const { kl_recurso_alumno } = require("../models");

router.get("/", async (req, res) => {
  const listaRecursoAlumno = await kl_recurso_alumno.findAll();
  res.json(listaRecursoAlumno);
});

router.post("/", async (req, res) => {
  const tarea = req.body;
  await kl_recurso_alumno.create(tarea);
  res.json(tarea);
});

module.exports = router;