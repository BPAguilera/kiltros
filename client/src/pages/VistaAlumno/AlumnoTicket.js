import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../../header/HeaderAlumno";
import "../../pages_css/VistaAlumno/AlumnoTicket.css";

function AlumnoTicket() {
    let navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        usuario: '',
        rol: '',
        descripcion: "",
    });

    useEffect(() => {
        const user = localStorage.getItem('authState');
        const userParsed = user ? JSON.parse(user) : null;
        if (userParsed) {
            setInitialValues(prevValues => ({
                ...prevValues,
                usuario: userParsed.usuario,
                rol: userParsed.rol
            }));
        }
    }, []);

    const validationSchema = Yup.object().shape({
        usuario: Yup.string().required(),
        rol: Yup.string().required(),
        descripcion: Yup.string().required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/logs", data, {
            headers: { accessToken: localStorage.getItem("accessToken") }
        }).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                console.log("ticket agregado");
                navigate("/homealumno");
            }
        }).catch((error) => {
            console.error('Error en respuesta del servidor:', error.response.data.error);
        });
    };

    return (
        <div className="AppTicketAlumno">
            <Header />
            <div className="SubContenidoAddTicketAlumno">
                <div className="createPostPageAddTicketAlumno">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize
                    >
                        <Form>
                            <label>
                                Descripción:
                                <Field
                                    type="text"
                                    name="descripcion"
                                    placeholder="Ingrese descripción"
                                />
                                <ErrorMessage name="descripcion" component="div" />
                            </label>
                            <button type="submit">Agregar Ticket</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default AlumnoTicket;