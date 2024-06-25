import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../pages_css/Logins/LoginAlumno.css"

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
                navigate('../HomeProfesor');
            }
        }
        for (let i in Alumno) {
            if (Alumno[i].nombre === data.usuario && Alumno[i].contrasena === data.contrasena) {
                navigate('../HomeAlumno');
            }
        }
    };
    
    return (
        <div className='ContenidoLogin'>
            
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="FormLogin">
                    <h1>Iniciar sesion</h1>
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
                            type="password"
                            placeholder="Contraseña"
                        />
                        <button type="submit">Iniciar Sesion</button>
                    </Form>
                </Formik>
            
        </div>
    )
}

export default Login;