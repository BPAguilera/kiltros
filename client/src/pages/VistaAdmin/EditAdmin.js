import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../header/HeaderAdmin";
import "../../pages_css/VistaAdmin/EditAdmin.css";

function EditAdmin() {
    let { id } = useParams(); // Obtén el ID de la URL
    const navigate = useNavigate();
    const[Data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/admins/id/${id}`).then((response) => {
                setData(response.data);
            });
    });

    const initialValues = {
        usuario: Data.usuario,
        contrasena: Data.contrasena,
    };

    const validationSchema = Yup.object().shape({
        usuario: Yup.string().required(),
        contrasena: Yup.string().required(),
    });

    const onSubmit = (data) => {
        axios.put(`http://localhost:3001/admins/${id}`, data).then((response) => {})
        navigate("/adminadmin");
    };

    return (
        <div>
            <Header />
            <div className="mainContainer">
                <div className="editAdminPage">
                    <h2>Editar Administrador</h2>
                    <div className="errorMessage">{}</div>
                    <div className="successMessage">{}</div>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form className="formContainer">
                            <label htmlFor="usuario">Usuario: </label>
                            <ErrorMessage name="usuario" component="span" />
                            <Field
                                autoComplete="off"
                                id="usuario"
                                name="usuario"
                                placeholder="Usuario"
                            />
                            <label htmlFor="contrasena">Contraseña: </label>
                            <ErrorMessage name="contrasena" component="span" />
                            <Field
                                autoComplete="off"
                                id="contrasena"
                                name="contrasena"
                                placeholder="Contraseña"
                            />
                            <button className="botonEdit" type="submit">Editar Administrador</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default EditAdmin;