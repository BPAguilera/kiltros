import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRightFromBracket, faUserTie } from '@fortawesome/free-solid-svg-icons';

function HeaderProfesor() {
  return (
    <header className="fixed-header"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner">
        <a href="/HomeProfesor" className="boton-header"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/ProfesorCurso" className="boton-header"><FontAwesomeIcon title="Cursos" icon={faUserTie} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/" className="boton-header"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }} /></a>
      </div>
    </header>
  );
}

export default HeaderProfesor;