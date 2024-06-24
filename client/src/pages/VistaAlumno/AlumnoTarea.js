import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../pages_css/AdminAdmin.css";
import Header from "../../header/HeaderAlumno";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

function AlumnoTarea(){
    const [Tarea, setTarea] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/recursos_profesor").then((response) => {
            setTarea(response.data);
        });
    }, []);

    return(
        <div className="ContenidoHome">
            <Header />

            <div className="SubContenidoAdmin">
                <h2 className="TituloAdmin">Listado de Tareas</h2>
                <div className="ContenidoTablaAdmin">
                    <div className="TablaScroll">
                        <table className="TablaAdmin">
                            <thead>
                                <tr>
                                    <th className="Titulos-Admin">Tipo</th>
                                    <th className="Titulos-Admin">Nombre</th>
                                    <th className="Titulos-Admin">Profesor</th>
                                    <th className="Titulos-Admin"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Tarea.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Admin">{value.tipo_recurso}</td>
                                        <td className="Relleno-Admin">{value.nombre}</td>
                                        <td className="Relleno-Admin">{value.id_profesor}</td>
                                        <td className="Relleno-Boton-Admin">
                                            <a onClick={() => navigate(`/HomeAlumno`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
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
export default AlumnoTarea;