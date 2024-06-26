import React from 'react';
import './HeaderProfesor.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRightFromBracket, faUserTie } from '@fortawesome/free-solid-svg-icons';

function HeaderProfesor() {
  return (
    <header className="fixed-header-profesor"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-profesor">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-profesor">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-profesor">
        <a href="/HomeProfesor" className="boton-header-profesor"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/LoginProfesor" className="boton-header-profesor"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }} /></a>
      </div>
    </header>
  );
}

export default HeaderProfesor;