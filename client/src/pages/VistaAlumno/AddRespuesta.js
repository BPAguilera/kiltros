import React, { createRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../header/HeaderAlumno";
import "../../pages_css/VistaAlumno/AddRespuesta.css";

function AddRespuesta() {
    let navigate = useNavigate();
    const fileInput = createRef();
    let { id_recurso_profesor } = useParams();
    const user = localStorage.getItem("authState");
    const userParsed = user ? JSON.parse(user) : null;

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        formData.set("fileData", fileInput.current.files[0]);
        formData.set("archivo_alumno", fileInput.current.files[0].name);

        axios.post("http://localhost:3001/recursos_alumno", formData).then((response) => {
            navigate("/homealumno");
        });
    };

    return (
        <div className="AppRespuesta">
            <Header/>
            <div className="SubContenidoAlumnoRespuesta">
                <div className="SubContenidoAddRespuesta">
                    <div className="createPostPageAddRespuesta">
                        <form onSubmit={onSubmit}>
                            <label>
                                Archivo:
                                <input type="file" name="fileData" ref={fileInput} />
                            </label>
                            <button type="submit">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddRespuesta;