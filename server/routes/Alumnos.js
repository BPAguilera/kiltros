const express = require("express");
const router = express.Router();
const { kl_alumno, kl_curso } = require("../models");

router.get("/", async (req, res) => {
  const alumnos = await kl_alumno.findAll({include: [{model: kl_curso, required: true}]});
  res.json(alumnos);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const alumno = await kl_alumno.findByPk(id);
  res.json(alumno);
});

router.get("/curso/:id_curso", async (req, res) => {
  const id = req.params.id_curso;
  const alumno = await kl_alumno.findAll({where: {id_curso: id,},});
  res.json(alumno);
});

//kl_alumno.findAll();
//kl_alumno.findAll({where: {id_curso: id,},});
//kl_alumno.findAll({include: [{model: kl_curso, required: true}]}).then(posts => {/* ... */});

router.post("/", async (req, res) => {
  const alumno = req.body;
  await kl_alumno.create(alumno);
  res.json(alumno);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await kl_alumno.destroy({where: {id: id,},});
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; // Obtiene el ID del administrador desde los parámetros de la URL
  const alumno = req.body;
  await kl_alumno.update({ id_alumno: alumno.id_alumno, nombre: alumno.nombre, rut: alumno.rut, contrasena: alumno.contrasena, id_curso: alumno.id_curso},{where: {id: id,},},);
});

module.exports = router;