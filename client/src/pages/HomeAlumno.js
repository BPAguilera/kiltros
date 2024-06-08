import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../pages_css/HomeAdmin.css";
import Header from "../header/HeaderAlumno";

function HomeAlumno(){

    return(
        <div className="ContenidoHome">
            <Header />
        </div>
    );
}
export default HomeAlumno;