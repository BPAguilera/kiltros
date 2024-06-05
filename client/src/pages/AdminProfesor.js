import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../pages_css/AdminProfesor.css";
import Header from "../header/HeaderAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';

function AdminProfesor(){
    const [Profesor, setProfesor] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/profesores").then((response) => {
            setProfesor(response.data);
        });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/profesores/` + id);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="ContenidoProfesor">
            <Header />
            <div className="SubContenidoProfesor">
                <h2 className="TituloProfesor">Listado de Profesores</h2>
                <div className="ContenidoTablaProfesor">
                    <div className="TablaScroll">
                        <table className="TablaProfesor">
                            <thead>
                                <tr>
                                    <th className="Titulos-Profesor">ID</th>
                                    <th className="Titulos-Profesor">Nombre</th>
                                    <th className="Titulos-Profesor">Rut</th>
                                    <th className="Titulos-Profesor">Editar</th>
                                    <th className="Titulos-Profesor">Borrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Profesor.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Profesor">{value.id}</td>
                                        <td className="Relleno-Profesor">{value.nombre}</td>
                                        <td className="Relleno-Profesor">{value.rut}</td>
                                        <td className="Relleno-Boton-Profesor">
                                            <a onClick={() => navigate(`/EditProfesor/${value.id}`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
                                        </td>
                                        <td className="Relleno-Boton-Profesor">
                                            <a onClick={() => handleDelete(value.id)}><FontAwesomeIcon title="Eliminar Alumno" icon={faTrash} size="2xl" style={{ color: 'black', }} /></a>
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
export default AdminProfesor;