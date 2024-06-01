import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faChild,faRightFromBracket, faPersonChalkboard,faUserTie, faBook  } from '@fortawesome/free-solid-svg-icons';



function HeaderAdmin() {
  return (
    <header className="fixed-header"> {/* Aplica la clase 'fixed-header' */}
      <div style={leftCornerStyle}>
        <p>Bienvenido</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div style={rightCornerStyle}>
      <a href="/HomeAdmin" className="boton"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black', }} /></a>
      <a href="/AddAlumno" className="boton"> <FontAwesomeIcon title="Agregar Alumno" icon={faChild} size="2xl" style={{ color: 'black', }} /></a>
      <a href="/AddAlumno" className="boton"> <FontAwesomeIcon title="Agregar Profesor" icon={faPersonChalkboard} size="2xl" style={{ color: 'black', }} /></a>
      <a href="/AddAlumno" className="boton"> <FontAwesomeIcon title="Agregar Administrador" icon={faUserTie} size="2xl" style={{ color: 'black', }} /></a>
      <a href="/AddAlumno" className="boton"> <FontAwesomeIcon title="Agregar Cursos" icon={faBook} size="2xl" style={{ color: 'black', }} /></a>
      <a href="/" className="boton"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black', }} /></a>
      </div>
    </header>
  );
}

const leftCornerStyle = {
  marginLeft: '10px', // Estilo para el espacio en la esquina izquierda
};

const rightCornerStyle = {
  marginRight: '10px', // Estilo para el espacio en la esquina derecha
};

export default HeaderAdmin;
