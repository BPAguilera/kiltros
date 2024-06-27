import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAlumno/HomeAlumno.css";
import Header from "../../header/HeaderAlumno";

function HomeAlumno(){

    return(
        <div className="ContenidoHomeAlumno">
            <Header />
            <div className="SubContenidoAlumnoCurso">
                <h2>Listado Actividades</h2>
                <div className="tabla-container-alumno">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha Inicio</th>
                                <th>Nombre Actividad</th>
                                <th>descripción</th>
                                <th>Archivo Profesor</th>
                                <th>Archivo Alumno</th>
                                <th></th>
                                <th>Fecha de Envio</th>
                                
                            </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default HomeAlumno;