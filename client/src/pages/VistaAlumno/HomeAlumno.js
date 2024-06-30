import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FileDownload from "js-file-download";
import "../../pages_css/VistaAlumno/HomeAlumno.css";
import Header from "../../header/HeaderAlumno";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

function HomeAlumno() {
    const [Tarea, setTarea] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('authState');
        if (!user) {
            console.log("No user found in localStorage.");
            return;
        }

        const userParsed = JSON.parse(user);
        console.log("usuario:", userParsed);

        axios.get(`http://localhost:3001/recursos_profesor/curso/${userParsed.id_curso}`)
            .then((response) => {
                console.log("respuesta del servidor:", response);
                setTarea(response.data);
            })
            .catch((error) => {
                console.error("Error fetching cursos:", error);
            });
    }, []);

    const onButtonClick = (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("id-value");
        const file = e.currentTarget.getAttribute("file-value");

        axios({
            method: 'get',
            url: `http://localhost:3001/recursos_profesor/${id}`,
            responseType: 'blob'
        })
            .then(function (res) {
                FileDownload(res.data, file);
            })
            .catch((error) => {
                console.error("Error downloading file:", error);
            });
    };

    return (
        <div className="ContenidoHomeAlumno">
            <Header />
            <div className="SubContenidoAlumnoCurso">
                <h2>Listado Actividades</h2>
                <div className="tabla-container-alumno">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Fecha Inicio</th>
                                <th>Nombre Actividad</th>
                                <th>Descripción</th>
                                <th>Archivo Profesor</th>
                                <th>Subir Archivo</th>
                                <th>Fecha de Envío</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Tarea.length === 0 && (
                                <tr>
                                    <td colSpan="7">No hay actividades disponibles.</td>
                                </tr>
                            )}
                            {Tarea.map((value) => (
                                <tr key={value.id}>
                                    <td className="Relleno-Boton-Admin"><button id-value={value.id} file-value={value.archivo_profesor} onClick={onButtonClick}>Descargar</button></td>
                                    <td className="Relleno-Admin">{value.tipo_recurso}</td>
                                    <td className="Relleno-Admin">{value.nombre}</td>
                                    <td className="Relleno-Admin">{value.descripcion}</td>
                                    <td className="Relleno-Admin">{value.archivo_profesor}</td>
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
