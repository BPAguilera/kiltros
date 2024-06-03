import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../pages_css/AdminProfesor.css";
import Header from "../header/HeaderAdmin";

function AdminProfesor(){

    return(
        <div className="ContenidoProfesor">
            <Header />
        </div>
    );
}
export default AdminProfesor;