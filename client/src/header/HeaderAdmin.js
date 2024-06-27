import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChild, faPlus, faRightFromBracket, faPersonChalkboard, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../helpers/authContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';


function HeaderAdmin() {
  let navigate = useNavigate();
  const user = useContext(authContext);

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
        <p>Bienvenido {user.authState.usuario}{user.authState.rol}{user.authState.id }</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner">
        
        <a href="/HomeAdmin" className="boton-header"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminAdmin" className="boton-header"><FontAwesomeIcon title="Administradores" icon={faUserTie} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminAlumno" className="boton-header"><FontAwesomeIcon title="Alumnos" icon={faChild} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminCurso" className="boton-header"><FontAwesomeIcon title="Cursos" icon={faBook} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AdminProfesor" className="boton-header"><FontAwesomeIcon title="Profesores" icon={faPersonChalkboard} size="2xl" style={{ color: 'black' }} /></a>
        <a href="/AddAlumno" className="boton-header"><FontAwesomeIcon title="Agregar" icon={faPlus} size="2xl" style={{ color: 'black' }} /></a>
        <button onClick={logout}>
          <i className="boton-header"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }}></FontAwesomeIcon></i>
        </button>
      </div>
    </header>
  );
}

export default HeaderAdmin;