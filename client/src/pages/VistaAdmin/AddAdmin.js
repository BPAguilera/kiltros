import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../../header/HeaderAdmin";
import Sidebar from "../../sidebar/SidebarAdmin";
import "../../pages_css/VistaAdmin/AddAdmin.css"
import { useNavigate } from 'react-router-dom';

function AddAdmin() {
    const navigate = useNavigate();
    
    const initialValues = {
        usuario: "",
        contrasena: "",
    };

    const validationSchema = Yup.object().shape({
        usuario: Yup.string().required(),
        contrasena: Yup.string().required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/admins", data).then((response) => {
            navigate("/adminadmin")
        });
    };


    return (
        <div className='ContenidoAddAdmin'>
            <Header/>
            <Sidebar/>
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
                            </tbody>
                        </table>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddAdmin;
