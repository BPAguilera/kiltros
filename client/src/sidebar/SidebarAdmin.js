import React from 'react';
import './SidebarAdmin.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/AddAdmin" className="boton-sidebar">Agregar Administrador</a></li>
          <li><a href="/AddAlumno" className="boton-sidebar">Agregar Alumno</a></li>
          <li><a href="/AddCurso" className="boton-sidebar">Agregar Curso</a></li>
          <li><a href="/AddProfesor" className="boton-sidebar">Agregar Profesor</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
