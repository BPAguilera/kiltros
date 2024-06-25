import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAdmin/HomeAdmin.css";
import Sidebar from "../../sidebar/SidebarAdmin";
import Header from "../../header/HeaderAlumno";

function HomeAlumno(){

    return(
        <div className="ContenidoHome">
            <Header />
            <div>
                texto
            </div>
        </div>
    );
}
export default HomeAlumno;