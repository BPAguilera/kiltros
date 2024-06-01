const express = require("express");
const router = express.Router();
const { kl_curso } = require("../models");

router.get("/", async (req, res) => {
  const listaCurso = await kl_curso.findAll();
  res.json(listaCurso);
});

router.post("/", async (req, res) => {
  const curso = req.body;
  await kl_curso.create(curso);
  res.json(curso);
});

module.exports = router;