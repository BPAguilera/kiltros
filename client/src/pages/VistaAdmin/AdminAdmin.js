import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../pages_css/VistaAdmin/AdminAdmin.css";
import Header from "../../header/HeaderAdmin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';

function AdminAdmin(){
    const [Admin, setAdmin] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/admins").then((response) => {
            setAdmin(response.data);
        });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/admins/` + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="ContenidoAdmin">
            <Header />

            <div className="SubContenidoAdmin">
                <h2 className="TituloAdmin">Listado de Administradores</h2>
                <div className="ContenidoTablaAdmin">
                    <div className="TablaScroll">
                        <table className="TablaAdmin">
                            <thead>
                                <tr>
                                    <th className="Titulos-Admin">ID</th>
                                    <th className="Titulos-Admin">Usuario</th>
                                    <th className="Titulos-Admin">Editar</th>
                                    <th className="Titulos-Admin">Borrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Admin.map((value) => (
                                    <tr key={value.id}>
                                        <td className="Relleno-Admin">{value.id}</td>
                                        <td className="Relleno-Admin">{value.usuario}</td>
                                        <td className="Relleno-Boton-Admin">
                                            <button onClick={() => navigate(`/EditAdmin/${value.id}`)}><FontAwesomeIcon title="Actualizar Alumno" icon={faPenNib} size="2xl" style={{ color: 'black', }} /></button>
                                        </td>
                                        <td className="Relleno-Boton-Admin">
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
export default AdminAdmin;