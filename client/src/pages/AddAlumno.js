import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../header/HeaderAdmin";
import Sidebar from "../sidebar/SidebarAdmin";
import "../pages_css/AddAlumno.css"
import { useNavigate } from 'react-router-dom';

function AddAlumno() {
    const Navigate = useNavigate();
    
    const initialValues = {
        id_alumno: "",
        nombre: "",
        rut: "",
        contrasena: "",
        id_curso:"",
    };
    
    const validationSchema = Yup.object().shape({
        id_alumno: Yup.number().integer().required(),
        nombre: Yup.string().required(),
        rut: Yup.number().integer().required(),
        contrasena: Yup.string().required(),
        id_curso: Yup.number().integer().required(),
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/alumnos", data).then((response) => {
            Navigate("/AdminAlumno")

        });
    };
    
    return (
        <div className='ContenidoAddAlumno'>
            <Header/>
            <Sidebar/>
            <div className="createPostPageAddAlumno">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <table>
                            <caption>Agregar Nuevo Alumno</caption>
                            <tbody>
                                <tr>
                                    <td><label>ID_Alumno: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddAlumno"
                                            name="id_alumno"
                                            placeholder="Ingrese el ID del alumno"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Nombre: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddAlumno"
                                            name="nombre"
                                            placeholder="Ingrese el nombre del alumno"
                                        />
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
                                    </td>
                                </tr>
                                <tr>
                                <td><label>ID_Curso: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddAlumno"
                                            name="id_curso"
                                            placeholder="Ingrese el ID del curso"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit">Agregar Alumno</button>
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

export default AddAlumno;