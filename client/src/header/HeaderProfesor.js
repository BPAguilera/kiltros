import './HeaderProfesor.css'; // Importa el archivo CSS para los estilos
import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChild, faPlus, faRightFromBracket, faPersonChalkboard, faUserTie, faBook } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../helpers/authContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';


function HeaderProfesor() {
  let navigate = useNavigate();
  const user = useContext(authContext);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authState");
    navigate('/LoginAdmin');
  }
  return (
    <header className="fixed-header-profesor"> {/* Aplica la clase 'fixed-header' */}
      <div className="left-corner-profesor">
        <p>Bienvenido, {user.authState.usuario}</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div className="center-content-profesor">
        <p>AWA</p> {/* Texto centrado en el encabezado */}
      </div>
      <div className="right-corner-profesor">
        <a href="/HomeProfesor" className="boton-header-profesor"><FontAwesomeIcon title="Inicio" icon={faHome} size="2xl" style={{ color: 'black' }} /></a>
        <button onClick={logout}>
          <i className="boton-header"><FontAwesomeIcon title="Cerrar Sesion" icon={faRightFromBracket} size="2xl" style={{ color: 'black' }}></FontAwesomeIcon></i>
        </button>
      </div>
    </header>
  );
}

export default HeaderProfesor;