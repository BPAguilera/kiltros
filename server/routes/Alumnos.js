const express = require("express");
const router = express.Router();
const { kl_alumno, kl_curso } = require("../models");
const bcrypt = require("bcrypt");

const {validationToken} = require("./middleware");


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

router.post("/", async (req, res) => {
  const alumno = req.body;
  const exist = await kl_alumno.findOne({where: {nombre: alumno.nombre}});
  if(!exist) {
    bcrypt.hash(alumno.contrasena, 10).then((hash)=>{
      kl_alumno.create({
        nombre: alumno.nombre,
        rut: alumno.rut,
        contrasena: hash,
        id_curso: alumno.id_curso,
        rol: alumno.rol,
      })
      return res.status(201).json(alumno); // 201 Created
    }).catch((err) => {
      console.log(err);
      return res.status(500).json({error: "Error al crear alumno"}); // 500 Internal Server Error
    });
  } else {
    return res.status(409).json({error: "alumno ya existe"}); // 409 Conflict
  }
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