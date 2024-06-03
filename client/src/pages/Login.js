import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../pages_css/Login.css"

function Login() {
    let navigate = useNavigate();

    const [Admin, setAdmin] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/admins").then((response) => {
            setAdmin(response.data);
        });
    }, []);

    const [Profe, setProfe] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/profesores").then((response) => {
            setProfe(response.data);
        });
    }, []);

    const [Alumno, setAlumnos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/alumnos").then((response) => {
            setAlumnos(response.data);
        });
    }, []);

    const initialValues = {
        usuario: "",
        contrasena: "",
    };
    
    const validationSchema = Yup.object().shape({
        usuario: Yup.string().required(),
        contrasena: Yup.string().required(),
    });
    
    const onSubmit = (data) => {
        for (let i in Admin) {
            if (Admin[i].usuario === data.usuario && Admin[i].contrasena === data.contrasena) {
                navigate('../HomeAdmin');
            }
        }
        for (let i in Profe) {
            if (Profe[i].nombre === data.usuario && Profe[i].contrasena === data.contrasena) {
                navigate('../HomeAdmin');
            }
        }
        for (let i in Alumno) {
            if (Alumno[i].nombre === data.usuario && Alumno[i].contrasena === data.contrasena) {
                navigate('../HomeAdmin');
            }
        }
    };
    
    return (
        <div className='ContenidoLogin'>
            <div className="LoginTable">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <label>Usuario: </label>
                        <ErrorMessage name="username" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="usuario"
                            placeholder="Usuario"
                        />
                        <label>Contraseña: </label>
                        <ErrorMessage name="username" component="span" />
                        <Field
                            autocomplete="off"
                            id="inputCreatePost"
                            name="contrasena"
                            placeholder="Contraseña"
                        />
                        <button type="submit">Create Post</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login;