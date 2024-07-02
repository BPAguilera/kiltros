const express = require("express");
const router = express.Router();
const { kl_profesor } = require("../models");
const bcrypt = require("bcrypt");

const {validationToken} = require("./middleware");

router.get("/", async (req, res) => {
  const listaProfesor = await kl_profesor.findAll();
  res.json(listaProfesor);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const profesor = await kl_profesor.findByPk(id);
  res.json(profesor);
});

router.post("/", async (req, res) => {
  const profesor = req.body;
  const exist = await kl_profesor.findOne({ where: { nombre: profesor.nombre } });
  if (!exist) {
    try {
      await kl_profesor.create({
        nombre: profesor.nombre,
        rut: profesor.rut,
        contrasena: profesor.contrasena,
        rol: profesor.rol,
      });
      return res.status(201).json(profesor); // 201 Created
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Error al crear profesor" }); // 500 Internal Server Error
    }
  } else {
    return res.status(409).json({ error: "profesor ya existe" }); // 409 Conflict
  }
});



router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await kl_profesor.destroy({where: {id: id,},});
  return res.json("profesor eliminado con exito");
});

router.put("/:id", async (req, res) => {
  const id = req.params.id; 
  const profesor = req.body;
  console.log(req.body)
  await kl_profesor.update({ id_profesor: profesor.profesor, nombre: profesor.nombre, rut: profesor.rut, contrasena: profesor.contrasena },{where: {id: id,},},);
});

module.exports = router;