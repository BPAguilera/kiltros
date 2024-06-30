import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FileDownload from "js-file-download";
import "../../pages_css/VistaProfesor/ProfesorTarea.css";
import Header from "../../header/HeaderProfesor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
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
            });
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/recursos_profesor/` + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="ContenidoProfesorTarea">
            <Header />
            <Sidebar />
            <h2>Listado Actividades</h2>
            <button className="boton-agregar-Tarea-Profesor" onClick={() => navigate(`/AddTarea/${id_curso}`)}>Agregar Tarea</button>
            <div className="tabla-container-profesor-tarea">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Fecha Inicio</th>
                            <th>Nombre Actividad</th>
                            <th>Descripción</th>
                            <th>Archivo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Tarea.map((value) => (
                            <tr key={value.id}>
                                <td><button id-value={value.id} file-value={value.archivo_profesor} onClick={onButtonClick}>Descargar</button></td>
                                <td className="descripcion-columna">{value.createdAt}</td>
                                <td className="descripcion-columna">{value.nombre}</td>
                                <td className="descripcion-columna">{value.descripcion}</td>
                                <td className="descripcion-columna">{value.archivo_profesor}</td>
                                <td><button onClick={() => navigate(`/ProfesorRespuesta/${value.id}`)}>Ver Respuestas</button></td>
                                <td className="Relleno-Boton-Profesor">
                                    <button onClick={() => handleDelete(value.id)}><FontAwesomeIcon title="Eliminar Alumno" icon={faTrash} size="2xl" style={{ color: 'black', }} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ProfesorTarea;