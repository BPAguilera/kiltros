import React, { useEffect, useState } from "react"; // Importa las funciones necesarias de React
import { useParams, useNavigate } from "react-router-dom"; // Importa hooks de React Router para obtener parámetros y navegar
import { Formik, Form, Field, ErrorMessage } from "formik"; // Importa componentes de Formik para manejo de formularios
import * as Yup from "yup"; // Importa Yup para la validación de esquemas
import axios from "axios"; // Importa Axios para hacer solicitudes HTTP
import HeaderAdmin from "../../header/HeaderAdmin"; // Importa un componente de encabezado
import "../../pages_css/VistaAdmin/EditCurso.css"; // Importa un archivo CSS para estilos

function EditCurso() {
    let { id } = useParams(); // Obtiene el parámetro "id" de la URL
    const navigate = useNavigate(); // Hook para navegación programática

    const [Data, setData] = useState({}); // Estado para almacenar los datos del curso
    useEffect(() => {
        // Hook de efecto para obtener los datos del curso por ID
        axios.get(`http://localhost:3001/cursos/curso/${id}`).then((response) => {
            setData(response.data); // Almacena los datos recibidos en el estado
        });
    }, [id]); // Dependencia en "id" para ejecutar el efecto cuando cambie

    const [Profes, setProfe] = useState([]); // Estado para almacenar la lista de profesores
    useEffect(() => {
        // Hook de efecto para obtener la lista de profesores
        axios.get("http://localhost:3001/profesores").then((response) => {
            setProfe(response.data); // Almacena los datos recibidos en el estado
        });
    }, []); // Dependencia vacía para ejecutar el efecto solo una vez al montar

    const initialValues = {
        nombre: Data.nombre, // Valor inicial del nombre del curso
        id_profesor: Data.id_profesor, // Valor inicial del ID del profesor
    };

    const validationSchema = Yup.object().shape({
        // Esquema de validación con Yup
        nombre: Yup.string().required(), // Campo nombre obligatorio
        id_profesor: Yup.number().integer().required(), // Campo id_profesor obligatorio y debe ser entero
    });

    const onSubmit = (curso) => {
        // Función de envío del formulario
        axios.put(`http://localhost:3001/cursos/` + id, curso).then((response) => { });
        navigate('/adminCurso'); // Navega a la página de administración de cursos
    };

    return (
        <div>
            <HeaderAdmin />
            <div className="mainContainer">
                <div className="formContainer">
                    <h2>Editar Curso</h2>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <label>Nombre:</label>
                            <ErrorMessage name="nombre" component="span" />
                            <Field
                                autoComplete="off"
                                name="nombre"
                                placeholder=""
                            />


                            <label>Profesor a cargo:</label>
                            <ErrorMessage name="id_profesor" component="span" />
                            <Field as="select" name="id_profesor" className="custom-select-edit-curso">
                                <option value="" label="">Seleciona Profesor{" "}</option>
                                {Profes.map((profe) => (
                                    <option key={profe.id} value={profe.id}>
                                        {profe.nombre}
                                    </option>
                                ))}
                            </Field>

                            <button className="botonEdit" type="submit">Editar Curso</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default EditCurso;