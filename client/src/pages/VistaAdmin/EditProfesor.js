import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import HeaderAdmin from "../../header/HeaderAdmin";
import "../../pages_css/VistaAdmin/EditProfesor.css"; // Asegúrate de importar el CSS correcto

function EditProfesor() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [Data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/profesores/id/${id}`).then((response) => {
            setData(response.data);
        });

    });

    const initialValues = {
        nombre: Data.nombre,
        rut: Data.rut,
        contrasena: Data.contrasena,
    };

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required(),
        rut: Yup.string().required(),
        contrasena: Yup.string().required(),
    });

    const onSubmit = (profesor) => {
        axios.put(`http://localhost:3001/profesores/${id}`, profesor).then(() => {})
        navigate("/adminprofesor");
    };

    return (
        <div>
            <HeaderAdmin />
            <div className="mainContainer">
                <div className="editProfesorPage">
                    <h2>Editar Profesor</h2>
                    <div className="errorMessage"></div>
                    <div className="successMessage"></div>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form className="formContainer">
                            <label htmlFor="nombre">Nombre: </label>
                            <ErrorMessage name="nombre" component="span" />
                            <Field
                                autoComplete="off"
                                id="nombre"
                                name="nombre"
                                placeholder="Nombre del profesor"
                            />
                            <label htmlFor="rut">RUT: </label>
                            <ErrorMessage name="rut" component="span" />
                            <Field
                                autoComplete="off"
                                id="rut"
                                name="rut"
                                placeholder="RUT del profesor"
                            />
                            <label htmlFor="contrasena">Contraseña: </label>
                            <ErrorMessage name="contrasena" component="span" />
                            <Field
                                autoComplete="off"
                                id="contrasena"
                                name="contrasena"
                                placeholder="Contraseña del profesor"
                            />
                            <button className="botonEdit" type="submit">Editar Profesor</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default EditProfesor;
