import React from 'react'
import Header from "../../header/HeaderProfesor";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import "../../pages_css/VistaAdmin/AddAdmin.css"
function AlumnoTicket() {
    let navigate = useNavigate();
    const user = localStorage.getItem('authState');
    const userParsed = user ? JSON.parse(user) : null;

    const initialValues = {
        usuario: userParsed.usuario,
        rol:userParsed.rol,
        descripcion: "",
    };

    const validationSchema = Yup.object().shape({
        usuario: Yup.string().required(),
        rol: Yup.string().required(),
        descripcion: Yup.string().required(),
    });

    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:3001/logs", data, { headers: { accessToken: localStorage.getItem("accessToken"), } })
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                } else {
                    console.log("ticket agregado");
                    navigate("/homealumno")
                }

            })
            .catch((error) => {
                console.error('Error en respuesta del servidor:', error.response.data.error);
            });
    };

    return (
        <div>
            {/* <Header /> */}
            <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <table>
                            <caption>Agregar Ticket</caption>
                            <tbody>
                                <tr>
                                    <td><label>descripcion: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddAdmin"
                                            name="descripcion"
                                            placeholder="Ingrese descripcion"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit">Agregar Ticket</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Form>
                </Formik>

        </div>
    )
}

export default AlumnoTicket