const express = require("express");
const router = express.Router();
const { kl_log } = require("../models");

router.get("/", async (req, res) => {
  const listaLog = await kl_log.findAll();
  res.json(listaLog);
});

router.post("/", async (req, res) => {
  const log = req.body;
  await kl_log.create(log);
  res.json(log);
});

module.exports = router;