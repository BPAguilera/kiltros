import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAlumno/AlumnoJuego.css";
import Header from "../../header/HeaderAlumno";

function AlumnoJuego(){

    return(
        <div className="ContenidoALumnoJuego">
            <Header />

            <div className="SubContenidoALumnoJuego">
                <h2>Listado de Juegos</h2>
                <div className="tabla-juegos">
                    <table>
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
    );
}
export default AlumnoJuego;