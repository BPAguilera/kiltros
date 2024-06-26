import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {authContext} from '../../helpers/authContext'
import "../../pages_css/Logins/LoginAdmin.css"
import Header from "../../header/HeaderLogin";

function Login() {

    const {setAuthState} = useContext(authContext);
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    

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
        axios.post("http://localhost:3001/login", data).then((response) => {
            //console.log(response.data.token)
            if(response.data.error) {
                setError(response.data.error);
            } else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({usuario: response.data.usuario, id: response.data.id, rol: response.data.rol, state: true, id_curso: 0})
                localStorage.setItem('authState', JSON.stringify({usuario: response.data.usuario, id: response.data.id, rol: response.data.rol, state: true, id_curso: 0,}));
                navigate('../HomeAdmin');
            }
        }).catch((error) => {
            console.log(error)
            setError("Error en el servidor");
        });
    };
    return (
        <div className='ContenidoLoginAdmin'>
            <Header/>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="FormLoginAdmin">
                    <h1>Iniciar sesión</h1>
                    {error && <div className="error">{error}</div>}
                    <label>Usuario: </label>
                    <ErrorMessage name="usuario" component="span" className="error"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost"
                        name="usuario"
                        placeholder="Usuario"
                    />
                    <label>Contraseña: </label>
                    <ErrorMessage name="contrasena" component="span" className="error"/>
                    <Field 
                        autoComplete="off"
                        id="inputCreatePost"
                        name="contrasena"
                        type="password"
                        placeholder="Contraseña"
                    />
                    {errorMessage && (
                    <tr>
                        <td colSpan="2" style={{ color: 'red', textAlign: 'center' }}>
                            {errorMessage}
                        </td>
                    </tr>
                    )}
                    <button type="submit">Iniciar Sesión</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login;