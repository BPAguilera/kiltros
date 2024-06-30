import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {authContext} from '../../helpers/authContext'
import "../../pages_css/Logins/LoginProfesor.css"
import Header from "../../header/HeaderLoginProfesor";

function LoginProfesor() {

    const {setAuthState} = useContext(authContext);
    let navigate = useNavigate();



    const initialValues = {
        usuario: "",
        contrasena: "",
    };
    
    const validationSchema = Yup.object().shape({
        usuario: Yup.string().required("usuario es un campo obligatorio"),
        contrasena: Yup.string().required("contrasena es un campo obligatorio"),
    });
    
    const [error, setError] = useState("");
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/loginProfesor", data).then((response) => {
            //console.log(response.data.token)
            if(response.data.error) {
                setError(response.data.error);
            } else {
                console.log(response.data)
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({usuario: response.data.usuario, id: response.data.id, rol: response.data.rol, state: true, id_curso: 0})
                localStorage.setItem('authState', JSON.stringify({usuario: response.data.usuario, id: response.data.id, rol: response.data.rol, state: true, id_curso: 0}));
                //console.log("miau"+localStorage.getItem('authState'));
                navigate('../HomeProfesor');
            }
        }).catch((error) => {
            console.log(error)
            setError("Error en el servidor");
        });
    };
    return (
        <div className='ContenidoLoginProfesor'>
            <Header/>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="FormLoginProfesor">
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

export default LoginProfesor;