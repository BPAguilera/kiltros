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

    const [Profes, setProfe] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/profesores").then((response) => {
            setProfe(response.data);
        });
    }, []);

    const initialValues = {
        nombre: "",
        id_profesor: "",
        unidades:"",
    };
    
    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required(),
        id_profesor: Yup.number().integer().required(),
        unidades: Yup.number().integer().required(),
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
                                            placeholder="Ingrese el nombre del curso"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Profesor: </label></td>
                                    <td>
                                        <Field as="select" name="id_profesor">
                                            <option value="" label="">Seleciona Profesor{" "}</option>
                                            {Profes.map((profe) => (
                                            <option key={profe.id} value={profe.id}>{profe.nombre}</option>
                                            ))}
                                        </Field>
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