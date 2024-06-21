import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "../pages_css/AdminCurso.css";
import Header from "../header/HeaderProfesor";
function ProfesorAddTarea() {
    let navigate = useNavigate()

    const initialValues = {
        tipo_recurso: "",
        nombre: "",
        descripcion: "",
        archivo_profesor:"",
    };

    const validationSchema = Yup.object().shape({
        tipo_recurso: Yup.string().required(),
        nombre: Yup.number().integer().required(),
        descripcion: Yup.string().required(),
        archivo_profesor: Yup.string().required(),

    });
    
    const onSubmit = (data) => {
        
    }

  return (
    <div>ProfesorAddTarea</div>
  )
}

export default ProfesorAddTarea