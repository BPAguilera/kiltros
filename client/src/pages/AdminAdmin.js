import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../pages_css/AdminAdmin.css";
import Header from "../header/HeaderAdmin";


function AdminAdmin(){

    return(
        <div className="ContenidoAdmin">
            <Header />
        </div>
    );
}
export default AdminAdmin;