import React from 'react'
import Header from "../header/HeaderAdmin";
import Sidebar from "../sidebar/SidebarAdmin";
import "../pages_css/AddAdmin.css"

function AddAdmin() {
    
    
    return (
        <div className='ContenidoAddAdmin'>
            <Header />
            <Sidebar/>
            <div className='SubContenidoAddAdmin'>
                
            </div>
            
        </div>
  )
}

export default AddAdmin;