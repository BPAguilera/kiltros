import React from 'react';
import './HeaderAlumno.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChild, faPlus, faRightFromBracket, faPersonChalkboard, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';
import { authContext } from '../helpers/authContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderAlumno() {
  let navigate = useNavigate();

  const user = useContext(authContext);
  console.log(user)
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
        <a href="/HomeAlumno" className="boton-header-alumno"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AlumnoJuego" className="boton-header-alumno"><FontAwesomeIcon title="Minijuegos" icon={faChild} size="2xl" style={{ color: 'black' }} /></a>
        <button onClick={logout}>
          <i className="boton-header"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }}></FontAwesomeIcon></i>
        </button>
      </div>
    </header>
  );
}

export default HeaderAlumno;