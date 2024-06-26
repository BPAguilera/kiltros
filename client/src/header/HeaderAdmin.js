import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChild, faPlus, faRightFromBracket, faPersonChalkboard, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';

function HeaderAdmin() {
  return (
    <header className="fixed-header-admin"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-admin">
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-admin">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-admin">
        <a href="/HomeAdmin" className="boton-header-admin"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminAdmin" className="boton-header-admin"><FontAwesomeIcon title="Administradores" icon={faUserTie} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminAlumno" className="boton-header-admin"><FontAwesomeIcon title="Alumnos" icon={faChild} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminCurso" className="boton-header-admin"><FontAwesomeIcon title="Cursos" icon={faBook} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminProfesor" className="boton-header-admin"><FontAwesomeIcon title="Profesores" icon={faPersonChalkboard} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AddAlumno" className="boton-header-admin"><FontAwesomeIcon title="Agregar" icon={faPlus} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/LoginAdmin" className="boton-header-admin"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }} /></a>
      </div>
    </header>
  );
}

export default HeaderAdmin;