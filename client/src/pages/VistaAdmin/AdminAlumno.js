import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../pages_css/VistaAdmin/AdminAlumno.css";
import Header from "../../header/HeaderAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';

function AdminAlumno() {
    const [Alumno, setAlumnos] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/alumnos").then((response) => {
            setAlumnos(response.data);
        });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/alumnos/` + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="ContenidoAlumno">
            <Header />

            <div className="SubContenidoAlumno">
                <h2 className="TituloAlumno">Listado de alumnos</h2>
                <div className="ContenidoTablaAlumno">
                    <div className="TablaScroll">
                        <table className="TablaAlumnos">
                            <thead>
                                <tr>
                                    <th className="Titulos-Alumnos">ID</th>
                                    <th className="Titulos-Alumnos">Nombre</th>
                                    <th className="Titulos-Alumnos">Rut</th>
                                    <th className="Titulos-Alumnos">Curso</th>
                                    <th className="Titulos-Alumnos">Editar</th>
                                    <th className="Titulos-Alumnos">Borrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Alumno.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Alumnos">{value.id}</td>
                                        <td className="Relleno-Alumnos">{value.nombre}</td>
                                        <td className="Relleno-Alumnos">{value.rut}</td>
                                        <td className="Relleno-Alumnos">{value.kl_curso.nombre}</td>
                                        <td className="Relleno-Boton-Alumnos">
                                            <button onClick={() => navigate(`/EditAlumno/${value.id}`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></button>
                                        </td>
                                        <td className="Relleno-Boton-Alumnos">
                                            <button onClick={() => handleDelete(value.id)}><FontAwesomeIcon title="Eliminar Alumno" icon={faTrash} size="2xl" style={{ color: 'black', }} /></button>
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

export default AdminAlumno;