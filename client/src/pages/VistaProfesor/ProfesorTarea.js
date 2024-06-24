import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../pages_css/AdminCurso.css";
import Header from "../../header/HeaderProfesor";

function ProfesorTarea(){
    let { id_curso } = useParams();
    let navigate = useNavigate();

    const [Tarea, setTarea] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/recursos_profesor/curso/${id_curso}`).then((response) => {
            setTarea(response.data);
        });
    }, []);

    return(
        <div className="ContenidoHome">
            <Header />

            <div className="SubContenidoAlumno">
                <h2 className="TituloAlumno">Listado de tareas</h2>
                <div className="ContenidoTablaAlumno">
                    <div className="TablaScroll">
                        <table className="TablaAlumnos">
                            <thead>
                                <tr>
                                    <th className="Titulos-Alumnos">Tipo</th>
                                    <th className="Titulos-Alumnos">Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Tarea.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Alumnos">{value.tipo_recurso}</td>
                                        <td className="Relleno-Alumnos">{value.nombre}</td>
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
export default ProfesorTarea;