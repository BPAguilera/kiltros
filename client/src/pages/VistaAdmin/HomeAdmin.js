import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAdmin/HomeAdmin.css";
import Header from "../../header/HeaderAdmin";

function HomeAdmin() {
    const [ticket, setTicket] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/logs").then((response) => {
            setTicket(response.data);
        });
    }, []);


    return (
        <div className="ContenidoProfesor">
            <Header />
            <div className="SubContenidoProfesor">
                <h2 className="TituloProfesor">Listado de Tickets</h2>
                <div className="ContenidoTablaProfesor">
                    <div className="TablaScroll">
                        <table className="TablaProfesor">
                            <thead>
                                <tr>
                                    <th className="Titulos-Profesor">ID</th>
                                    <th className="Titulos-Profesor">Usuario</th>
                                    <th className="Titulos-Profesor">Rol</th>
                                    <th className="Titulos-Profesor">descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ticket.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Profesor">{value.id}</td>
                                        <td className="Relleno-Profesor">{value.usuario}</td>
                                        <td className="Relleno-Profesor">{value.rol}</td>
                                        <td className="Relleno-Profesor">{value.descripcion}</td>
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
export default HomeAdmin;