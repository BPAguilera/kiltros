import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAdmin/HomeAdmin.css";
import Header from "../../header/HeaderAlumno";

function AlumnoJuego(){

    return(
        <div className="ContenidoHome">
            <Header />

            <div className="SubContenidoAdmin">
                <h2 className="TituloAdmin">Listado de Tareas</h2>
                <div className="ContenidoTablaAdmin">
                    <div className="TablaScroll">
                        <table className="TablaAdmin">
                            <thead>
                                <tr>
                                    <th className="Titulos-Admin">Minijuegos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="Relleno-Admin">Los Minijuegos no se encuentran disponibles :/</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AlumnoJuego;