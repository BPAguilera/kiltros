import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../pages_css/EditAlumno.css"
import Header from "../header/HeaderAdmin";

function EditAlumno() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState({});

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
        nombre: Yup.string().required(),
        rut: Yup.number().integer().required(),
        contrasena: Yup.string().required(),
        id_curso: Yup.number().integer().required(),
    });

    const onSubmit = (Alumno) => {
        axios.put(`http://localhost:3001/alumnos/` + id, Alumno).then((response) => { });
        navigate("/adminalumno");
    };

    return (
        <div>
            <Header />
            <div className="mainContainer">
                <div className="formContainer">
                    <h2>Editar Alumno</h2>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <label>ID Alumno: </label>
                            <ErrorMessage name="id_alumno" component="span" className="errorMessage" />
                            <Field
                                autoComplete="off"
                                name="id_alumno"
                                placeholder="ID del Alumno"
                                readOnly
                            />

                            <label>Nombre: </label>
                            <ErrorMessage name="nombre" component="span" className="errorMessage" />
                            <Field
                                autoComplete="off"
                                name="nombre"
                                placeholder="Nombre"
                            />

                            <label>RUT: </label>
                            <ErrorMessage name="rut" component="span" className="errorMessage" />
                            <Field
                                autoComplete="off"
                                name="rut"
                                placeholder="RUT"
                            />

                            <label>Contraseña: </label>
                            <ErrorMessage name="contrasena" component="span" className="errorMessage" />
                            <Field
                                autoComplete="off"
                                name="contrasena"
                                placeholder="Contraseña"

                            />

                            <label>ID Curso: </label>
                            <ErrorMessage name="id_curso" component="span" className="errorMessage" />
                            <Field
                                autoComplete="off"
                                name="id_curso"
                                placeholder="ID del Curso"
                            />

                            <button type="submit">Editar Alumno</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default EditAlumno;