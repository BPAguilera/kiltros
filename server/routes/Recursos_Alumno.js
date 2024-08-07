const express = require("express");
const fileUpload = require('express-fileupload');
const path = require("path");

const assetsFolder = path.join(__dirname, '..', 'files');

const router = express.Router();
router.use(fileUpload());

const { kl_recurso_alumno, kl_alumno } = require("../models");

router.get("/", async (req, res) => {
  const respuesta = await kl_recurso_alumno.findAll({include: [{model: kl_alumno, required: true}]});
  res.json(respuesta);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await kl_recurso_alumno.findByPk(id);
  res.download("files/" + respuesta.archivo_alumno);
});

router.get("/tarea/:id_recurso_profesor", async (req, res) => {
  const id = req.params.id_recurso_profesor;
  const respuesta = await kl_recurso_alumno.findAll({where: {id_recurso_profesor: id,},include: [{model: kl_alumno, required: true}]});
  res.json(respuesta);
});

router.post("/", async (req, res) => {
  const tarea = req.body;
  await kl_recurso_alumno.create(tarea);
  res.json(tarea);
  //console.log(req.body);

  const { fileData } = req.files;
  fileData.mv(path.join(assetsFolder, fileData.name));
  //console.log(req.files);
});

module.exports = router;