import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAlumno/HomeAlumno.css";
import Header from "../../header/HeaderAlumno";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

function HomeAlumno(){
    const [Tarea, setTarea] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/recursos_profesor").then((response) => {
            setTarea(response.data);
        });
    }, []);

    return(
        <div className="ContenidoHomeAlumno">
            <Header />
            <div className="SubContenidoAlumnoCurso">
                <h2>Listado Actividades</h2>
                <div className="tabla-container-alumno">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha Inicio</th>
                                <th>Nombre Actividad</th>
                                <th>descripción</th>
                                <th>Archivo Profesor</th>
                                <th>Archivo Alumno</th>
                                <th></th>
                                <th>Fecha de Envio</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                                {Tarea.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Admin">{value.tipo_recurso}</td>
                                        <td className="Relleno-Admin">{value.nombre}</td>
                                        <td className="Relleno-Admin">{value.id_profesor}</td>
                                        <td className="Relleno-Boton-Admin">
                                            <a onClick={() => navigate(`/AddRespuesta/${value.id}`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default HomeAlumno;