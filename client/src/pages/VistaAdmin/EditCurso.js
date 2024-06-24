import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import HeaderAdmin from "../../header/HeaderAdmin";
import "../../pages_css/VistaAdmin/EditCurso.css";

function EditCurso() {
    let { id } = useParams();
    const navigate = useNavigate();

    const [Data, setData] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3001/cursos/id/${id}`).then((response) => {
            setData(response.data);
        });
    });

    const [Profes, setProfe] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/profesores").then((response) => {
            setProfe(response.data);
        });
    }, []);

    const initialValues = {
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
                            <label>Nombre:</label>
                            <ErrorMessage name="nombre" component="span" />
                            <Field
                                autoComplete="off"
                                name="nombre"
                                placeholder=""
                            />

                            <label>Unidades:</label>
                            <ErrorMessage name="Unidades" component="span" />
                            <Field
                                autoComplete="off"
                                name="unidades"
                                placeholder=""
                            />

                            <label>Profesor a cargo:</label>
                            <ErrorMessage name="id_profesor" component="span" />
                            <Field as="select" name="id_profesor">
                                <option value="" label="">Seleciona Profesor{" "}</option>
                                {Profes.map((profe) => (
                                    <option key={profe.id} value={profe.id}>
                                        {profe.nombre}
                                    </option>
                                ))}
                            </Field>

                            <button className="botonEdit" type="submit">Editar Curso</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default EditCurso;