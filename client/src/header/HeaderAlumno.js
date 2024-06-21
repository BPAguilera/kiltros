import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChild, faPlus, faRightFromBracket, faPersonChalkboard, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';

function HeaderAlumno() {
  return (
    <header className="fixed-header"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner">
        <a href="/HomeAlumno" className="boton-header"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AlumnoTarea" className="boton-header"><FontAwesomeIcon title="Tareas" icon={faUserTie} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AlumnoJuego" className="boton-header"><FontAwesomeIcon title="Minijuegos" icon={faChild} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/" className="boton-header"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }} /></a>
      </div>
    </header>
  );
}

export default HeaderAlumno;