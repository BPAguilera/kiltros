import React, { useState, createRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Header from "../../header/HeaderProfesor";
import "../../pages_css/VistaAdmin/AddProfesor.css"

function AddTarea() {
    const fileInput = createRef();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("avatar", fileInput.current.files[0]);

        axios.post("http://localhost:3001/recursos_profesor", formData).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input type="file" name="avatar" ref={fileInput} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default AddTarea;