import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddAlumno() {
    const initialValues = {
        id_alumno: "",
        nombre: "",
        rut: "",
        contrasena: "",
        id_curso:"",
    };
    
    const validationSchema = Yup.object().shape({
        id_alumno: Yup.number().integer().required(),
        nombre: Yup.string().required(),
        rut: Yup.number().integer().required(),
        contrasena: Yup.string().required(),
        id_curso: Yup.number().integer().required(),
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/alumnos", data).then((response) => {
        });
    };
    
    return (
        <div>
            <div className="createPostPage">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <label>id_alumno: </label>
                        <ErrorMessage name="title" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="id_alumno"
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
                        <label>id_curso: </label>
                        <ErrorMessage name="username" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="id_curso"
                            placeholder=""
                        />
                        <button type="submit">Create Post</button>
                    </Form>
                </Formik>
            </div>
        </div>
  )
}

export default AddAlumno;