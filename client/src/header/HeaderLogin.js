import React from 'react';
import './HeaderLogin.css'; // Importa el archivo CSS para los estilos

function HeaderLogin() {
  return (
    <header className="fixed-header-login"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-login">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-login">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-login">
        <a href="/LoginAdmin" className="boton-header-login">Admin</a>
        <a href="/LoginAlumno" className="boton-header-login">Alumno</a>
        <a href="/LoginProfesor" className="boton-header-login">Profesor</a>
      </div>
    </header>
  );
}

export default HeaderLogin;