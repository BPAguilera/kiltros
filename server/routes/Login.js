const express = require("express");
const router = express.Router();
const { kl_alumno, kl_profesor, kl_admin } = require("../models");


router.get("/", async (req, res) => {
    res.json("miau");
  });




module.exports = router;