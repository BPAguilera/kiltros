import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../pages_css/HomeAdmin.css";
import Header from "../header/HeaderAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';


function HomeAdmin() {
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
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="Contenido">
            <Header />
            <div className="Contenido-tabla">
                <table className="Tabla-Alumnos">
                    <thead>
                        <tr>
                            <th className="Titulos-Alumnos">ID</th>
                            <th className="Titulos-Alumnos">Nombre</th>
                            <th className="Titulos-Alumnos">Rut</th>
                            <th className="Titulos-Alumnos">Contraseña</th>
                            <th className="Titulos-Alumnos">ID CURSO</th>
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
                                <td className="Relleno-Alumnos">{value.contrasena}</td>
                                <td className="Relleno-Alumnos">{value.id_curso}</td>
                                <td className="Relleno-Boton">
                                    <a onClick={() => navigate(`/EditAlumno/${value.id}`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
                                </td>
                                <td className="Relleno-Boton">
                                    <a onClick={() => handleDelete(value.id)}><FontAwesomeIcon title="Eliminar Alumno" icon={faTrash} size="2xl" style={{ color: 'black', }} /></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default HomeAdmin;