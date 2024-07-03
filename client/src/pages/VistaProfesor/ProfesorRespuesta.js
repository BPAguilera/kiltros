import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FileDownload from "js-file-download";
import "../../pages_css/VistaProfesor/ProfesorRespuesta.css";
import Header from "../../header/HeaderProfesor";
import Sidebar from "../../sidebar/SidebarProfesor";

function ProfesorRespuesta() {
    let { id_recurso_profesor } = useParams();
    let navigate = useNavigate();

    const [Tarea, setTarea] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/recursos_alumno/tarea/${id_recurso_profesor}`).then((response) => {
            setTarea(response.data);
        });
    }, []);

    const onButtonClick = (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("id-value");
        const file = e.currentTarget.getAttribute("file-value");
    
        axios({
            method: 'get',
            url: `http://localhost:3001/recursos_alumno/${id}`,
            responseType: 'blob'
        })
        .then(function (res) {
            FileDownload(res.data, file);
        });
    };

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // formato de 24 horas
        };
        return new Date(dateString).toLocaleString('es-ES', options).replace(',', '');
    };

    return (
        <div className="ContenidoVistaProfesorRespuesta">
            <Header />
            <Sidebar />
            <div className="SubContenidoVistaProfesorRespuesta">
                <h2>Listado Respuestas</h2>
                <div className="tabla-container-profesor-Respuesta">
                    <div className="TablaScroll-ProfeRespuesta">
                        <table>
                            <thead>
                                <tr>
                                    <th>Descargar</th>
                                    <th>Fecha Entrega</th>
                                    <th>Alumno</th>
                                    <th>Archivo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Tarea.map((value) => (
                                    <tr key={value.id}>
                                        <td><button id-value={value.id} file-value={value.archivo_alumno} onClick={onButtonClick}>Descargar</button></td>
                                        <td>{formatDate(value.createdAt)}</td>
                                        <td>{value.kl_alumno.nombre}</td>
                                        <td>{value.archivo_alumno}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfesorRespuesta;

