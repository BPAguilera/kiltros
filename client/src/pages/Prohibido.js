import React from 'react'
import "../pages_css/Prohibido.css";
function Prohibido() {
  return (
    <div className="contenido-prohibido">
    <h1 className="prohibido-title">Acceso Denegado</h1>
    <p className="prohibido-message">No tienes acceso a esta página</p>
    <a href="/" className="prohibido-link">Volver al inicio</a>
  </div>
  )
}

export default Prohibido