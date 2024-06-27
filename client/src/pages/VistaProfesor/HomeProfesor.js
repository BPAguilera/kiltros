import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../header/HeaderProfesor";
import "../../pages_css/VistaProfesor/HomeProfesor.css";

function HomeProfesor() {
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/cursos")
            .then((response) => {
                setCursos(response.data);
            })
            .catch((error) => {
                console.error("Error fetching cursos:", error);
            });
    }, []);

    return (
        <div className="ContenidoHomeProfesor">
            <Header />
            <div className="SubContenidoProfesorCurso">
                <h2>Listado de Cursos</h2>
                <div className="tabla-container-profesor">
                    <table>
                        <thead>
                            <tr>
                                <th>Cursos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursos.map((curso) => (
                                <tr key={curso.id}>
                                    <td>
                                        <button onClick={() => navigate(`/ProfesorCurso/${curso.id}`)}>
                                            {curso.nombre}
                                        </button>
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

export default HomeProfesor;
