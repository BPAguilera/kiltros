import React from 'react';
import './HeaderAlumno.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChild, faPlus, faRightFromBracket, faPersonChalkboard, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';

function HeaderAlumno() {
  return (
    <header className="fixed-header-alumno"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-alumno">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-alumno">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-alumno">
        <a href="/HomeAlumno" className="boton-header-alumno"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AlumnoJuego" className="boton-header-alumno"><FontAwesomeIcon title="Minijuegos" icon={faChild} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/" className="boton-header-alumno"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }} /></a>
      </div>
    </header>
  );
}

export default HeaderAlumno;