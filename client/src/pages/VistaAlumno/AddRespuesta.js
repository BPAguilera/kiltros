import React, { createRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../header/HeaderAlumno";

function AddRespuesta() {
    let navigate = useNavigate();
    const fileInput = createRef();
    let { id_recurso_profesor } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        formData.set("fileData", fileInput.current.files[0]);
        formData.set("archivo_alumno", fileInput.current.files[0].name);

        axios.post("http://localhost:3001/recursos_alumno", formData).then((response) => {
            navigate("/AlumnoTarea")
        });
    };

    return (
        <div className="App">
            <Header/>
            <div className="createPostPageAddProfesor">
                <form onSubmit={onSubmit}>
                    <label><input type="file" name="fileData" ref={fileInput}/></label>
                    <label><input type="text" name="id_alumno" defaultValue={2} readOnly/></label>
                    <label><input type="text" name="id_recurso_profesor" defaultValue={id_recurso_profesor} readOnly/></label>
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </div>
    );
}

export default AddRespuesta
