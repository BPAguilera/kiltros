import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from "../../header/HeaderAdmin";
import Sidebar from "../../sidebar/SidebarAdmin";
import "../../pages_css/VistaAdmin/AddAdmin.css"


function AddAdmin() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

    const initialValues = {
        usuario: "",
        contrasena: "",
        rol: "Admin",
    };

    const validationSchema = Yup.object().shape({
        usuario: Yup.string().required(),
        contrasena: Yup.string().required(),
        rol: Yup.string().required()
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/admins", data, { headers: { accessToken: localStorage.getItem("accessToken"), } })
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                } else {
                    console.log("admin agregado");
                    setErrorMessage(""); // Limpiar el mensaje de error en caso de éxito
                    navigate("/adminadmin");
                }

            })
            .catch((error) => {
                // Si ocurre un error, maneja la respuesta de error
                if (error.response) {
                    // El servidor respondió con un código de estado diferente de 2xx
                    console.error('Error en respuesta del servidor:', error.response.data.error);
                    setErrorMessage(`Error: ${error.response.data.error}`);
                } else if (error.request) {
                    // La solicitud se hizo pero no se recibió respuesta
                    console.error('No se recibió respuesta del servidor:', error.request);
                    setErrorMessage('Error: No se recibió respuesta del servidor.');
                } else {
                    // Algo pasó al preparar la solicitud
                    console.error('Error al preparar la solicitud:', error.message);
                    setErrorMessage(`Error: ${error.message}`);
                }
            });
    };

    return (
        <div className='ContenidoAddAdmin'>
            <Header />
            <Sidebar />
            <div className="createPostPageAddAdmin">
            
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <table>
                            <caption>Agregar Nuevo Administrador</caption>
                            <tbody>
                                <tr>
                                    <td><label>Usuario: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddAdmin"
                                            name="usuario"
                                            placeholder="Ingrese el nombre del usuario"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Contraseña: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddAdmin"
                                            name="contrasena"
                                            placeholder="Ingrese la contraseña del administrador"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit">Agregar Admin</button>
                                    </td>
                                </tr>
                                {errorMessage && (
                                    <tr>
                                        <td colSpan="2" style={{ color: 'red', textAlign: 'center' }}>
                                            {errorMessage}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default AddAdmin;
