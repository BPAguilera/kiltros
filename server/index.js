const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const adminRouter = require("./routes/Admins");
app.use("/admins", adminRouter);

const alumnoRouter = require("./routes/Alumnos");
app.use("/alumnos", alumnoRouter);

const cursoRouter = require("./routes/Cursos");
app.use("/cursos", cursoRouter);

const logRouter = require("./routes/Logs");
app.use("/logs", logRouter);

const profesorRouter = require("./routes/Profesores");
app.use("/profesores", profesorRouter);

const tareaRouter = require("./routes/Recursos_Alumno");
app.use("/recursos_alumno", tareaRouter);

const recursoRouter = require("./routes/Recursos_Profesor");
app.use("/recursos_profesor", recursoRouter);

// Inicializamos la conexión
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});