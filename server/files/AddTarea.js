import React, { createRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../header/HeaderProfesor";
import "../../pages_css/VistaProfesor/AddTarea.css";

function AddTarea() {
    let navigate = useNavigate();
    const fileInput = createRef();
    let { id_curso } = useParams();
    const [idProfesor, setIdProfesor] = useState('');

    useEffect(() => {
        const user = localStorage.getItem("authState");
        const userParsed = user ? JSON.parse(user) : null;
        if (userParsed) {
            setIdProfesor(userParsed.id);
        }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        formData.set("fileData", fileInput.current.files[0]);
        formData.set("archivo_profesor", fileInput.current.files[0].name);

        axios.post("http://localhost:3001/recursos_profesor", formData).then((response) => {
            navigate(`/ProfesorTarea/${id_curso}`);
        });
    };

    return (
        <div className='ContenidoAddProfesor'>
            <Header/>
            <div className="createPostPageAddProfesor">
                <form onSubmit={onSubmit} className="formContainer">
                    <table>
                        <caption>Agregar Nueva Tarea</caption>
                        <tbody>
                            <tr>
                                <td><label>Tipo de Recurso: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="tipo_recurso"
                                        placeholder="Ingrese Tipo"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Nombre: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="nombre"
                                        placeholder="Ingrese Nombre"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Descripción: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="descripcion"
                                        placeholder="Ingrese Descripción"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Archivo: </label></td>
                                <td>
                                    <input
                                        type="file"
                                        name="fileData"
                                        ref={fileInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>ID Profesor: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="id_profesor"
                                        value={idProfesor}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>ID Curso: </label></td>
                                <td>
                                    <input
                                        type="text"
                                        name="id_curso"
                                        defaultValue={id_curso}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: 'center' }}>
                                    <button type="submit">Agregar Tarea</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default AddTarea;