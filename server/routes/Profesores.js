const express = require("express");
const router = express.Router();
const { kl_profesor } = require("../models");

router.get("/", async (req, res) => {
  const listaProfesor = await kl_profesor.findAll();
  res.json(listaProfesor);
});

router.post("/", async (req, res) => {
  const profesor = req.body;
  await kl_profesor.create(profesor);
  res.json(profesor);
});

module.exports = router;