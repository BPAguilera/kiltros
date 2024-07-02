import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "../../header/HeaderAdmin";
import Sidebar from "../../sidebar/SidebarAdmin";
import "../../pages_css/VistaAdmin/AddCurso.css"

function AddCurso() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("");

    const [Profes, setProfe] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/profesores").then((response) => {
            setProfe(response.data);
        });
    }, []);

    const initialValues = {
        nombre: "",
        id_profesor: "",
    };
    
    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre es obligatorio'),
        id_profesor: Yup.number().integer().required('El Profesor es obligatorio'),
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/cursos", data).then((response) => {
            navigate("/admincurso")
        });
    };

    return (
        <div className='ContenidoAddCurso'>
            <Header/>
            <Sidebar/>
            <div className="createPostPageAddCurso">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="formContainer">
                        <table>
                            <caption>Agregar Nuevo Curso</caption>
                            <tbody>
                                <tr>
                                    <td><label>Nombre: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddCurso"
                                            name="nombre"
                                            placeholder="Ejemplo: 1°A"
                                        />
                                        <ErrorMessage name="nombre" component="div" className="error" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Profesor: </label></td>
                                    <td>
                                        <Field as="select" name="id_profesor" className="custom-select">
                                            <option value="" label="">Seleciona Profesor{" "}</option>
                                            {Profes.map((profe) => (
                                            <option key={profe.id} value={profe.id}>{profe.nombre}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="id_profesor" component="div" className="error" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit">Agregar Curso</button>
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
    )
}

export default AddCurso;