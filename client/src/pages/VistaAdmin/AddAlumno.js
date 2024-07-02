import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../../header/HeaderAdmin";
import Sidebar from "../../sidebar/SidebarAdmin";
import "../../pages_css/VistaAdmin/AddAlumno.css";
import { useNavigate } from 'react-router-dom';

function AddAlumno() {
    const navigate = useNavigate();
    const [Cursos, setCurso] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/cursos").then((response) => {
            setCurso(response.data);
        });
    }, []);

    const initialValues = {
        nombre: "",
        rut: "",
        contrasena: "",
        id_curso: "",
        rol: "alumno",
    };

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre es obligatorio'),
        rut: Yup.number().typeError('Debe ser un número').required('El rut es obligatorio'),
        contrasena: Yup.string().required('La contraseña es obligatoria'),
        id_curso: Yup.number().typeError('Debe ser un número').required('El curso es obligatorio'),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/alumnos", data, {
            headers: { accessToken: localStorage.getItem("accessToken") }
        })
        .then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                console.log("alumno agregado");
                navigate("/AdminAlumno");
            }
        })
        .catch((error) => {
            if (error.response) {
                console.error('Error en respuesta del servidor:', error.response.data.error);
            } else if (error.request) {
                console.error('No se recibió respuesta del servidor:', error.request);
            } else {
                console.error('Error al preparar la solicitud:', error.message);
            }
        });
    };

    return (
        <div className='ContenidoAddAlumno'>
            <Header />
            <Sidebar />
            <div className="createPostPageAddAlumno">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ errors, touched }) => (
                        <Form className="formContainer">
                            <table>
                                <caption>Agregar Nuevo Alumno</caption>
                                <tbody>
                                    <tr>
                                        <td><label>Nombre: </label></td>
                                        <td>
                                            <Field
                                                autoComplete="off"
                                                id="inputCreatePostAddAlumno"
                                                name="nombre"
                                                placeholder="Ingrese el nombre del alumno"
                                            />
                                            <ErrorMessage name="nombre" component="div" className="error" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Rut: </label></td>
                                        <td>
                                            <Field
                                                autoComplete="off"
                                                id="inputCreatePostAddAlumno"
                                                name="rut"
                                                placeholder="Ingrese el rut del alumno"
                                            />
                                            <ErrorMessage name="rut" component="div" className="error" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Contraseña: </label></td>
                                        <td>
                                            <Field
                                                autoComplete="off"
                                                id="inputCreatePostAddAlumno"
                                                name="contrasena"
                                                placeholder="Ingrese la contraseña del alumno"
                                            />
                                            <ErrorMessage name="contrasena" component="div" className="error" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>Curso: </label></td>
                                        <td>
                                            <Field as="select" name="id_curso" className="custom-select">
                                                <option value="" label="">Selecciona Curso{" "}</option>
                                                {Cursos.map((curso) => (
                                                    <option key={curso.id} value={curso.id}>{curso.nombre}</option>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="id_curso" component="div" className="error" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" style={{ textAlign: 'center' }}>
                                            <button type="submit">Agregar Alumno</button>
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
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddAlumno;