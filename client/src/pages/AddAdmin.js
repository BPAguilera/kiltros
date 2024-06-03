import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../header/HeaderAdmin';
import Sidebar from '../sidebar/SidebarAdmin';
import '../pages_css/AddAdmin.css';

function AddAdmin() {
    const Navigate = useNavigate();

    const initialValues = {
        id_admin: '',
        usuario: '',
        contrasena: ''
    };

    const validationSchema = Yup.object().shape({
        id_admin: Yup.number().integer().required(),
        usuario: Yup.string().required(),
        contrasena: Yup.string().required()
    });

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/admins', data).then((response) => {
            Navigate('/adminadmin');
        });
    };

    return (
        <div className="AddAdminContainer">
            <Header />
            <Sidebar />
            <div className="AddAdminFormContainer">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form className="FormContainer">
                        <div className="FormTableContainer">
                            <table className="FormTable">
                                <caption>Agregar Nuevo Admin</caption>
                                <tbody>
                                    <tr>
                                        <td className="FormFieldLabel"><label>ID_Admin: </label></td>
                                        <td className="FormFieldInput">
                                            <Field
                                                autoComplete="off"
                                                id="inputCreatePost"
                                                name="id_admin"
                                                placeholder="Ingrese el ID del admin"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="FormFieldLabel"><label>Usuario: </label></td>
                                        <td className="FormFieldInput">
                                            <Field
                                                autoComplete="off"
                                                id="inputCreatePost"
                                                name="usuario"
                                                placeholder="Ingrese el nombre del admin"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="FormFieldLabel"><label>Contraseña: </label></td>
                                        <td className="FormFieldInput">
                                            <Field
                                                autoComplete="off"
                                                id="inputCreatePost"
                                                name="contrasena"
                                                placeholder="Ingrese la contraseña del admin"
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
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default AddAdmin;
