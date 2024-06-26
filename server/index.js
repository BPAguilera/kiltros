const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.redirect('/LoginAdmin');
});

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

const loginRouter = require("./routes/Login");
app.use("/login", loginRouter);

const loginAlumnoRouter = require("./routes/LoginAlumno");
app.use("/loginAlumno", loginAlumnoRouter);

const loginProfesorRouter = require("./routes/LoginProfesor");
app.use("/loginProfesor", loginProfesorRouter);

// Inicializamos la conexión
db.sequelize.sync().then(() => {3
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});