import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../pages_css/VistaProfesor/ProfesorCurso.css";
import Header from "../../header/HeaderProfesor";
import Sidebar from "../../sidebar/SidebarProfesor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

function ProfesorCurso(){
    let { id_curso } = useParams();
    localStorage.setItem("idCursoProfesor", id_curso)
    let navigate = useNavigate();

    const [Alumno, setAlumnos] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/alumnos/curso/${id_curso}`).then((response) => {
            setAlumnos(response.data);
        });
    }, []);

    return(
        <div className="ContenidoVistaProfesorCurso">
            <Header />
            <Sidebar/>

            <div className="SubContenidoVistaProfesorCurso">
                <h2>Listado de alumnos</h2>
                
                <div className="tabla-container-profesor-Curso">
                    <div className="TablaScroll-ProfeCurso">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Rut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Alumno.map((value) => (
                                    <tr key={value.id}>
                                        <td >{value.nombre}</td>
                                        <td>{value.rut}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfesorCurso;