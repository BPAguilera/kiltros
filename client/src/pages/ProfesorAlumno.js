import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../pages_css/AdminCurso.css";
import Header from "../header/HeaderProfesor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

function ProfesorAlumno(){
    let { id_curso } = useParams();
    let navigate = useNavigate();

    const [Alumno, setAlumnos] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/alumnos/curso/${id_curso}`).then((response) => {
            setAlumnos(response.data);
        });
    }, []);

    return(
        <div className="ContenidoHome">
            <Header />

            <div className="SubContenidoAlumno">
                <h2 className="TituloAlumno">Listado de alumnos</h2>
                <div className="ContenidoTablaAlumno">
                    <div className="TablaScroll">
                        <table className="TablaAlumnos">
                            <thead>
                                <tr>
                                    <th className="Titulos-Alumnos">Nombre</th>
                                    <th className="Titulos-Alumnos">Rut</th>
                                    <th className="Titulos-Alumnos">Reasignar Alumno</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Alumno.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Alumnos">{value.nombre}</td>
                                        <td className="Relleno-Alumnos">{value.rut}</td>
                                        <td className="Relleno-Boton-Profesor">
                                            <a onClick={() => navigate(`/ProfesorCurso`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
                                        </td>
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
export default ProfesorAlumno;