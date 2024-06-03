import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "../header/HeaderAdmin";
import Sidebar from "../sidebar/SidebarAdmin";
import "../pages_css/AddCurso.css"

function AddCurso() {
    const Navigate = useNavigate()
    const initialValues = {
        id_curso: "",
        nombre: "",
        id_profesor: "",
        unidades:"",

    };
    
    const validationSchema = Yup.object().shape({
        id_curso: Yup.number().integer().required(),
        nombre: Yup.string().required(),
        id_profesor: Yup.number().integer().required(),
        unidades: Yup.number().integer().required(),
 
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/cursos", data).then((response) => {
            Navigate("/admincurso")
        });
        

        
    };
    
    return (
        <div>
            <Header />
            <Sidebar/>
            <div className="createPostPage">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <label>id_curso: </label>
                        <ErrorMessage name="title" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="id_curso"
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
                        <label>id_profesor </label>
                        <ErrorMessage name="username" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="id_profesor"
                            placeholder=""
                        />
                        <label>unidades </label>
                        <ErrorMessage name="unidades" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="unidades"
                            placeholder=""
                        />
                        <button type="submit">Create Post</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default AddCurso;