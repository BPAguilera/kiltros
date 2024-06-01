import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../pages_css/HomeAdmin.css";
import Header from "../header/HeaderAdmin";

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



        <div>

            <div className="Contenido">
                <Link to="/AddAlumno">Agregar Alumno</Link>
                <div className="App">
                    {Alumno.map((value, key) => {
                        return (
                            <div className="post">
                                <div> {value.id} </div>
                                <div>{value.nombre}</div>
                                <div>{value.rut}</div>
                                <div>{value.contrasena}</div>
                                <div>{value.id_curso}</div>
                                <div><a onClick={() => { navigate(`/EditAlumno/${value.id}`); }}>Editar</a></div>
                                <div><a onClick={() => handleDelete(value.id)}>Borrar</a></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
}

export default HomeAdmin;