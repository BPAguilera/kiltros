import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos
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
    // setAuthState({
    //   usuario: "",
    //   id: 0,
    //   rol: "",
    //   state: false,
    // });
    navigate('/');
  }



  return (
    <header className="fixed-header"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner">
        <p>Bienvenido {user.authState.usuario}</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner">
        <a href="/HomeAlumno" className="boton-header"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AlumnoTarea" className="boton-header"><FontAwesomeIcon title="Tareas" icon={faUserTie} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AlumnoJuego" className="boton-header"><FontAwesomeIcon title="Minijuegos" icon={faChild} size="2xl" style={{ color: 'black' }} /></a>
        <button onClick={logout}>
          <i className="boton-header"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }}></FontAwesomeIcon></i>
        </button>
      </div>
    </header>
  );
}

export default HeaderAlumno;