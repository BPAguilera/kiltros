import React from 'react';
import './HeaderAdmin.css'; // Importa el archivo CSS para los estilos

function HeaderAdmin() {
  return (
    <header className="fixed-header"> {/* Aplica la clase 'fixed-header' */}
      <div style={leftCornerStyle}>
        <p>Sistema de Gestión</p> {/* Un texto que se mostrará en la esquina izquierda del encabezado */}
      </div>
      <div style={rightCornerStyle}>
      <a href="/home" className="boton">Home</a>
      <a href="/" className="boton">Cerrar sesion</a>
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
