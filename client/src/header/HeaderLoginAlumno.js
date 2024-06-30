import React from 'react';
import './HeaderLoginAlumno.css'; // Importa el archivo CSS para los estilos

function HeaderLoginAlumno() {
  return (
    <header className="fixed-header-loginAlumno"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-loginAlumno">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-loginAlumno">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-loginAlumno">
        <a href="/LoginAdmin" className="boton-header-loginAlumno">Admin</a>
        <a href="/LoginAlumno" className="boton-header-loginAlumno">Alumno</a>
        <a href="/LoginProfesor" className="boton-header-loginAlumno">Profesor</a>
      </div>
    </header>
  );
}

export default HeaderLoginAlumno;