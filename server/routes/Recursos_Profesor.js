const express = require("express");
const router = express.Router();
const { kl_recurso_profe } = require("../models");

router.get("/", async (req, res) => {
  const listaRecursoProfesor = await kl_recurso_profe.findAll();
  res.json(listaRecursoProfesor);
});

router.post("/", async (req, res) => {
  const recurso_profesor = req.body;
  await kl_recurso_profe.create(recurso_profesor);
  res.json(recurso_profesor);
});

module.exports = router;