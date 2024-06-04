import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "../header/HeaderAdmin";
import Sidebar from "../sidebar/SidebarAdmin";
import "../pages_css/AddCurso.css"

function AddCurso() {
    const Navigate = useNavigate()
    const initialValues = {
        id_curso: "",
        nombre: "",
        id_profesor: "",
        unidades:"",

    };
    
    const validationSchema = Yup.object().shape({
        id_curso: Yup.number().integer().required(),
        nombre: Yup.string().required(),
        id_profesor: Yup.number().integer().required(),
        unidades: Yup.number().integer().required(),
 
    });
    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/cursos", data).then((response) => {
            Navigate("/admincurso")
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
                                    <td><label>ID_Curso: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddCurso"
                                            name="id_curso"
                                            placeholder="Ingrese el ID del curso"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Nombre: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddCurso"
                                            name="nombre"
                                            placeholder="Ingrese el nombre del curso"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>ID_Profesor: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddCurso"
                                            name="id_profesor"
                                            placeholder="Ingrese el ID del profesor"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Unidades: </label></td>
                                    <td>
                                        <Field
                                            autoComplete="off"
                                            id="inputCreatePostAddCurso"
                                            name="unidades"
                                            placeholder="Ingrese las unidades"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit">Agregar Curso</button>
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

export default AddCurso;