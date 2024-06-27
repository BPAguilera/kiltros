import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../pages_css/VistaProfesor/ProfesorTarea.css";
import Header from "../../header/HeaderProfesor";
import Sidebar from "../../sidebar/SidebarProfesor";

function ProfesorTarea() {
    let { id_curso } = useParams();
    let navigate = useNavigate();

    const [Tarea, setTarea] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/recursos_profesor/curso/${id_curso}`).then((response) => {
            setTarea(response.data);
        });
    }, []);

    return (
        <div className="ContenidoProfesorTarea">
            <Header />
            <Sidebar />
                <h2>Listado Actividades</h2>
                <botton>Insertar</botton>
                <div className="tabla-container-profesor-tarea">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha Inicio</th>
                                <th>Nombre Actividad</th>
                                <th>Descripción</th>
                                <th>Archivo Profesor</th>
                                <th>Archivo Alumno</th>
                                <th>Archivo</th>
                                <th>Fecha de Envio</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
    );
}
export default ProfesorTarea;