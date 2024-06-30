const express = require("express");
const fileUpload = require('express-fileupload');
const path = require("path");

const assetsFolder = path.join(__dirname, '..', 'files');

const router = express.Router();
router.use(fileUpload());

const { kl_recurso_profe } = require("../models");

router.get("/", async (req, res) => {
  const recurso_profesor = await kl_recurso_profe.findAll();
  res.json(recurso_profesor);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const recurso_profesor = await kl_recurso_profe.findByPk(id);
  res.download("files/" + recurso_profesor.archivo_profesor);
});

router.get("/curso/:id_curso", async (req, res) => {
  const id = req.params.id_curso;
  const recurso_profesor = await kl_recurso_profe.findAll({where: {id_curso: id,},});
  res.json(recurso_profesor);
});

router.post("/", async (req, res) => {
  const recurso_profesor = req.body;
  await kl_recurso_profe.create(recurso_profesor);
  res.json(recurso_profesor);
  //console.log(req.body);

  const { fileData } = req.files;
  fileData.mv(path.join(assetsFolder, fileData.name));
  //console.log(req.files);
});

module.exports = router;