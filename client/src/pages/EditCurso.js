import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import HeaderAdmin from "../header/HeaderAdmin";
import "../pages_css/EditCurso.css";

function EditCurso() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/cursos/id/${id}`).then((response) => {
            setData(response.data);
        });
    });

    const initialValues = {
        id_curso: Data.id_curso,
        nombre: Data.nombre,
        unidades: Data.unidades,
        id_profesor: Data.id_profesor,
    };

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required(),
        unidades: Yup.number().integer().required(),
        id_profesor: Yup.number().integer().required(),
    });

    const onSubmit = (curso) => {
        axios.put(`http://localhost:3001/cursos/` + id, curso).then((response) => { });
        navigate('/adminCurso');
    };

    return (
        <div>
            <HeaderAdmin />
            <div className="mainContainer">
                <div className="formContainer">
                    <h2>Editar Curso</h2>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <label>ID Curso:</label>
                            <ErrorMessage name="id_curso" component="span" />
                            <Field name="id_curso" readOnly />

                            <label>Nombre:</label>
                            <ErrorMessage name="nombre" component="span" />
                            <Field name="nombre" />

                            <label>Unidades:</label>
                            <ErrorMessage name="Unidades" component="span" />
                            <Field name="unidades" />

                            <label>ID Profesor:</label>
                            <ErrorMessage name="id_profesor" component="span" />
                            <Field name="id_profesor" />


                            <button type="submit">Editar Curso</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default EditCurso;

