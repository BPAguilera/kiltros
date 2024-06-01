const express = require("express");
const router = express.Router();
const { kl_admin } = require("../models");

router.get("/", async (req, res) => {
  const listaAdmin = await kl_admin.findAll();
  res.json(listaAdmin);
});

router.post("/", async (req, res) => {
  const admin = req.body;
  await kl_admin.create(admin);
  res.json(admin);
});

module.exports = router;