import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAdmin/HomeAdmin.css";
import Header from "../../header/HeaderAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';


function HomeAdmin() {
    const [ticket, setTicket] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/logs").then((response) => {
            setTicket(response.data);
        });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/logs/` + id);
            window.location.reload();
        } catch (err) {
        }
    };


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
                                    <th className="Titulos-Profesor">Descripcion</th>
                                    <th className="Titulos-Profesor">Borrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ticket.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Profesor">{value.id}</td>
                                        <td className="Relleno-Profesor">{value.usuario}</td>
                                        <td className="Relleno-Profesor">{value.rol}</td>
                                        <td className="Relleno-Profesor">{value.descripcion}</td>
                                        <td className="Relleno-Profesor">
                                            <button onClick={() => handleDelete(value.id)}>
                                                <FontAwesomeIcon title="Eliminar Administrador" icon={faTrash} size="2xl" style={{ color: 'black' }} />
                                            </button>
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
export default HomeAdmin;