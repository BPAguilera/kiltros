import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../pages_css/Login.css"
import {AuthContext} from '../helpers/authContext'

function Login() {

    //const {setAuthStat} = useContext(AuthContext);
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
    
    const [error, setError] = useState("");
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/login", data).then((response) => {
            if(response.data.error) {
                setError(response.data.error);
            } else {
                localStorage.setItem("accessToken", response.data);
                //setAuthStat(true);
                console.log(response);
                navigate('../HomeAdmin');
            }
        }).catch((error) => {
            setError("Error en el servidor");
        });
    };
    return (
        <div className='ContenidoLogin'>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="FormLogin">
                    <h1>Iniciar sesión</h1>
                    {error && <div className="error">{error}</div>}
                    <label>Usuario: </label>
                    <ErrorMessage name="usuario" component="span" />
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost"
                        name="usuario"
                        placeholder="Usuario"
                    />
                    <label>Contraseña: </label>
                    <ErrorMessage name="contrasena" component="span" />
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost"
                        name="contrasena"
                        type="password"
                        placeholder="Contraseña"
                    />
                    <button type="submit">Iniciar Sesión</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login;