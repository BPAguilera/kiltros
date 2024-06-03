import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../pages_css/AdminCurso.css";
import Header from "../header/HeaderAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';


function AdminCurso(){
    const [Curso, setCurso] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/cursos").then((response) => {
            setCurso(response.data);
        });
    }, []);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/cursos/` + id);
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="ContenidoCurso">
            <Header />
            <div className="SubContenidoCurso">
                <h2 className="TituloCurso">Listado de Cursos</h2>
                <div className="ContenidoTablaCurso">
                    <div className="TablaScroll">
                        <table className="TablaCurso">
                            <thead>
                                <tr>
                                    <th className="Titulos-Cursos">ID</th>
                                    <th className="Titulos-Cursos">Nombre</th>
                                    <th className="Titulos-Cursos">Unidades</th>
                                    <th className="Titulos-Cursos">ID Profesor</th>
                                    <th className="Titulos-Cursos">Actualizar</th>
                                    <th className="Titulos-Cursos">Borrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Curso.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Cursos">{value.id}</td>
                                        <td className="Relleno-Cursos">{value.nombre}</td>
                                        <td className="Relleno-Cursos">{value.unidades}</td>
                                        <td className="Relleno-Cursos">{value.id_profesor}</td>
                                        <td className="Relleno-Boton-Cursos">
                                            <a onClick={() => navigate(`/EditCurso/${value.id}`)}><FontAwesomeIcon title="Actualizar Curso" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></a>
                                        </td>
                                        <td className="Relleno-Boton-Cursos">
                                            <a onClick={() => handleDelete(value.id)}><FontAwesomeIcon title="Eliminar Curso" icon={faTrash} size="2xl" style={{ color: 'black', }} /></a>
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
export default AdminCurso;