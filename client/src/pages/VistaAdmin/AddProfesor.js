import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Header from "../../header/HeaderAdmin";
import Sidebar from "../../sidebar/SidebarAdmin";
import "../../pages_css/VistaAdmin/AddProfesor.css"

function AddProfesor() {
    let navigate = useNavigate()

    const initialValues = {
        nombre: "",
        rut: "",
        contrasena: "",
        rol: "profesor",
    };

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required(),
        rut: Yup.number().integer().required(),
        contrasena: Yup.string().required(),

    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/profesores", data, { headers: { accessToken: localStorage.getItem("accessToken"), } })
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                } else {
                    console.log("profesor agregado");
                    //setErrorMessage(""); // Limpiar el mensaje de error en caso de éxito
                    navigate("/adminprofesor");
                }

            })
            .catch((error) => {
                // Si ocurre un error, maneja la respuesta de error
                if (error.response) {
                    // El servidor respondió con un código de estado diferente de 2xx
                    console.error('Error en respuesta del servidor:', error.response.data.error);
                    //setErrorMessage(`Error: ${error.response.data.error}`);
                } else if (error.request) {
                    // La solicitud se hizo pero no se recibió respuesta
                    console.error('No se recibió respuesta del servidor:', error.request);
                    //setErrorMessage('Error: No se recibió respuesta del servidor.');
                } else {
                    // Algo pasó al preparar la solicitud
                    console.error('Error al preparar la solicitud:', error.message);
                    //setErrorMessage(`Error: ${error.message}`);
                }
            });
    };

    return (
        <div className='ContenidoAddProfesor'>
            <Header/>
            <Sidebar/>
            <div className="createPostPageAddProfesor">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <table>
                            <caption>Agregar Nuevo Profesor</caption>
                            <tbody>
                                <tr>
                                    <td><label>Nombre: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddProfesor"
                                            name="nombre"
                                            placeholder="Ingrese el nombre del profesor"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Rut: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddProfesor"
                                            name="rut"
                                            placeholder="Ingrese el rut del profesor"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Contraseña: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddProfesor"
                                            name="contrasena"
                                            placeholder="Ingrese la contraseña del profesor"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit">Agregar Profesor</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddProfesor;