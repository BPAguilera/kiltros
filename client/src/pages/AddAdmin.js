import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../header/HeaderAdmin";
import Sidebar from "../sidebar/SidebarAdmin";
import "../pages_css/AddAdmin.css"
import { Navigate, useNavigate } from 'react-router-dom';

function AddAdmin() {
    const Navigate = useNavigate()
    const initialValues = {
        id_admin: "",
        usuario: "",
        contrasena: "",

    };

    const validationSchema = Yup.object().shape({
        id_admin: Yup.number().integer().required(),
        usuario: Yup.string().required(),
        contrasena: Yup.string().required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/admins", data).then((response) => {
            Navigate("/adminadmin")
        });
    };


    return (

        <div className='ContenidoAddAdmin'>
            <Header />
            <Sidebar />
            <div className='SubContenidoAddAdmin'>
                <div className="createPostPage">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form className="formContainer">
                            <label>id_admin: </label>
                            <ErrorMessage name="title" component="span" />
                            <Field
                                autocomplete="off"
                                id="inputCreatePost"
                                name="id_admin"
                                placeholder=""
                            />
                            <label>usuario: </label>
                            <ErrorMessage name="postText" component="span" />
                            <Field
                                autocomplete="off"
                                id="inputCreatePost"
                                name="usuario"
                                placeholder=""
                            />
                            <label>contrasena: </label>
                            <ErrorMessage name="contrasena" component="span" />
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
        </div>
    )
}

export default AddAdmin;
