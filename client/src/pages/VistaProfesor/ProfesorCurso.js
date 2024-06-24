import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../pages_css/AdminCurso.css";
import Header from "../../header/HeaderProfesor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

function ProfesorCurso(){
    const [Curso, setCurso] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/cursos").then((response) => {
            setCurso(response.data);
        });
    }, []);

    return(
        <div className="ContenidoHome">
            <Header />

            <div className="SubContenidoCurso">
                <h2 className="TituloCurso">Listado de Cursos</h2>
                <div className="ContenidoTablaCurso">
                    <div className="TablaScroll">
                        <table className="TablaCurso">
                            <thead>
                                <tr>
                                    <th className="Titulos-Cursos">Nombre</th>
                                    <th className="Titulos-Cursos">Unidades</th>
                                    <th className="Titulos-Cursos">Alumnos</th>
                                    <th className="Titulos-Cursos">Actividades</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Curso.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Cursos">{value.nombre}</td>
                                        <td className="Relleno-Cursos">{value.unidades}</td>
                                        <td className="Relleno-Boton-Profesor">
                                            <a onClick={() => navigate(`/ProfesorAlumno/${value.id}`)}><FontAwesomeIcon title="Alumnos" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
                                        </td>
                                        <td className="Relleno-Boton-Profesor">
                                            <a onClick={() => navigate(`/ProfesorTarea/${value.id}`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
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
export default ProfesorCurso;