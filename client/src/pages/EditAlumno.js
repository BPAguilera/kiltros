import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function EditAlumno() {
    let { id } = useParams();
    let navigate = useNavigate();
    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/alumnos/id/${id}`).then((response) => {
            setData(response.data);
        });
    });

    const initialValues = {
        id_alumno: Data.id_alumno,
        nombre: Data.nombre,
        rut: Data.rut,
        contrasena: Data.contrasena,
        id_curso: Data.id_curso,
    };

    const validationSchema = Yup.object().shape({
        id_alumno: Yup.number().integer().required(),
        nombre: Yup.string().required(),
        rut: Yup.number().integer().required(),
        contrasena: Yup.string().required(),
        id_curso: Yup.number().integer().required(),
    });

    const onSubmit = (Alumno) => {
        axios.put(`http://localhost:3001/alumnos/` + id, Alumno).then((response) => {});
        navigate("/HomeAdmin");
    };

    return (
        <div>
            <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <label>cod_alumno: </label>
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
    );
}

export default EditAlumno;