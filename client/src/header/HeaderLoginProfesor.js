import React from 'react';
import './HeaderLoginProfesor.css'; // Importa el archivo CSS para los estilos

function HeaderLoginProfesor() {
  return (
    <header className="fixed-header-loginProfesor"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-loginProfesor">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-loginProfesor">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-loginProfesor">
        <a href="/LoginAdmin" className="boton-header-loginProfesor">Admin</a>
        <a href="/LoginAlumno" className="boton-header-loginProfesor">Alumno</a>
        <a href="/LoginProfesor" className="boton-header-loginProfesor">Profesor</a>
      </div>
    </header>
  );
}

export default HeaderLoginProfesor;