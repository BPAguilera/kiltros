import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../pages_css/VistaAdmin/HomeAdmin.css";
import Header from "../../header/HeaderProfesor";

function HomeProfesor(){

    return(
        <div className="ContenidoHome">
            <Header />
        </div>
    );
}
export default HomeProfesor;