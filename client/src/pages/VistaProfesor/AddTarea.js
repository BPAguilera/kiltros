import React, { createRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../header/HeaderProfesor";
import "../../pages_css/VistaAdmin/AddProfesor.css"

function AddTarea() {
    let navigate = useNavigate()
    const fileInput = createRef();

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        formData.set("fileData", fileInput.current.files[0]);
        formData.set("archivo_profesor", fileInput.current.files[0].name);

        axios.post("http://localhost:3001/recursos_profesor", formData).then((response) => {
            navigate("/ProfesorTarea/2");
        });
    };

    return (
        <div className="App">
            <Header/>
            <div className="createPostPageAddProfesor">
                <form onSubmit={onSubmit}>
                    <label><input type="text" name="tipo_recurso" placeholder="Ingrese Tipo"/></label>
                    <label><input type="text" name="nombre" placeholder="Ingrese Nombre"/></label>
                    <label><input type="text" name="descripcion" placeholder="Ingrese Descripción" /></label>
                    <label><input type="file" name="fileData" ref={fileInput}/></label>
                    <label><input type="text" name="id_profesor" defaultValue={2} readOnly/></label>
                    <label><input type="text" name="id_curso" defaultValue={2} readOnly/></label>
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </div>
    );
}

export default AddTarea;