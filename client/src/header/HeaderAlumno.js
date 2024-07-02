import React from 'react';
import './HeaderAlumno.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faHome, faGamepad, faPlus, faSignOutAlt, faPersonChalkboard, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';
import { authContext } from '../helpers/authContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderAlumno() {
  let navigate = useNavigate();

  const user = useContext(authContext);
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authState");
    navigate('/LoginAlumno');
  }
  return (
    <header className="fixed-header-alumno"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-alumno">
        <p>Bienvenido, {user.authState.usuario}</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-alumno">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-alumno">
        <a href="/AlumnoTicket" className="boton-header-alumno"><FontAwesomeIcon title="Inicio" icon={faTicket} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/HomeAlumno" className="boton-header-alumno"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AlumnoJuego" className="boton-header-alumno"><FontAwesomeIcon title="Minijuegos" icon={faGamepad} size="2xl" style={{ color: 'black' }} /></a>
        <button className="boton-header-alumno" onClick={logout}>
          <FontAwesomeIcon title="Cerrar Sesion" icon={faSignOutAlt} size="2xl" style={{ color: 'black' }} />
        </button>
      </div>
    </header>
  );
}

export default HeaderAlumno;