import './SidebarAdmin.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Sidebar() {
    let { id_curso } = useParams();
    let navigate = useNavigate();

    const [Alumnos, setAlumnos] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/alumnos/curso/${id_curso}`).then((response) => {
            setAlumnos(response.data);
        });
    }, [id_curso]);

    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><a href={`/ProfesorCurso/${id_curso}`} className="boton-sidebar">Alumnos</a></li>
                    <li><a href={`/ProfesorTarea/${id_curso}`} className="boton-sidebar">Tareas</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
