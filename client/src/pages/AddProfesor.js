import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Header from "../header/HeaderAdmin";
import Sidebar from "../sidebar/SidebarAdmin";
import "../pages_css/AddProfesor.css"

function AddProfesor() {
    let navigate = useNavigate()

    const initialValues = {
        id_profesor: "",
        nombre: "",
        rut: "",
        contrasena: "",
    };

    const validationSchema = Yup.object().shape({
        id_profesor: Yup.number().integer().required(),
        nombre: Yup.string().required(),
        rut: Yup.number().integer().required(),
        contrasena: Yup.string().required(),

    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/profesores", data).then((response) => {
        });
        navigate("/AdminProfesor")
    };

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="createPostPage">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <label>id_profesor: </label>
                        <ErrorMessage name="title" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="id_profesor"
                            placeholder=""
                        />
                        <label>nombre: </label>
                        <ErrorMessage name="postText" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="nombre"
                            placeholder=""
                        />
                        <label>rut: </label>
                        <ErrorMessage name="username" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="rut"
                            placeholder=""
                        />
                        <label>contrasena: </label>
                        <ErrorMessage name="username" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="contrasena"
                            placeholder=""
                        />
                        <button type="submit">Create Post</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddProfesor;