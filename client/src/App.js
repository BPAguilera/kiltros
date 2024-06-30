import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginAdmin from './pages/Logins/LoginAdmin';
import LoginAlumno from './pages/Logins/LoginAlumno';
import LoginProfesor from './pages/Logins/LoginProfesor';

import HomeAdmin from './pages/VistaAdmin/HomeAdmin';
import HomeAlumno from './pages/VistaAlumno/HomeAlumno';
import HomeProfesor from './pages/VistaProfesor/HomeProfesor';

import AddAdmin from './pages/VistaAdmin/AddAdmin';
import AddAlumno from './pages/VistaAdmin/AddAlumno';
import AddCurso from './pages/VistaAdmin/AddCurso';
import AddProfesor from './pages/VistaAdmin/AddProfesor';

import AdminAdmin from './pages/VistaAdmin/AdminAdmin';
import AdminAlumno from "./pages/VistaAdmin/AdminAlumno";
import AdminCurso from "./pages/VistaAdmin/AdminCurso";
import AdminProfesor from './pages/VistaAdmin/AdminProfesor';

import EditAdmin from './pages/VistaAdmin/EditAdmin';
import EditAlumno from './pages/VistaAdmin/EditAlumno';
import EditCurso from './pages/VistaAdmin/EditCurso';
import EditProfesor from './pages/VistaAdmin/EditProfesor';

import AlumnoTicket from './pages/VistaAlumno/AlumnoTicket';
import AlumnoJuego from './pages/VistaAlumno/AlumnoJuego';
import AddRespuesta from './pages/VistaAlumno/AddRespuesta';

import ProfesorCurso from './pages/VistaProfesor/ProfesorCurso';
import ProfesorTarea from './pages/VistaProfesor/ProfesorTarea';
import ProfesorRespuesta from './pages/VistaProfesor/ProfesorRespuesta';
import AddTarea from './pages/VistaProfesor/AddTarea';
import ProfesorTicket from './pages/VistaProfesor/ProfesorTicket';

import Prohibido from './pages/Prohibido';

import { authContext } from './helpers/authContext'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProtectedRoute from './helpers/ProtectedRoute'; // Asegúrate de importar el componente

function App() {
  const [authState, setAuthState] = useState(() => {
    const savedAuthState = localStorage.getItem('authState');
    return savedAuthState ? JSON.parse(savedAuthState) : { usuario: "", id: 0, rol: "", state: false, id_curso: 0,};
  });

  useEffect(() => {
    axios.get("http://localhost:3001/login/auth", {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
      },
    }).then((response) => {
      //console.log(response)
      if (response.data.error) {
        const newAuthState = {
          usuario: "",
          id: 0,
          rol: "",
          state: false,
          id_curso: 0,
          
        };
        setAuthState(newAuthState);
        localStorage.setItem('authState', JSON.stringify(newAuthState));
      } else {
        console.log(response.data)
        const newAuthState = {
          usuario: response.data.usuario,
          id: response.data.id,
          rol: response.data.rol,
          state: true,
          id_curso: response.data.id_curso,
          
        };
        setAuthState(newAuthState);
        localStorage.setItem('authState', JSON.stringify(newAuthState));
      }
    });
  }, []);
  return (
    <div className="App">
      <authContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginAdmin/>} exact />
          <Route path="/LoginAdmin" element={<LoginAdmin />} exact />
          <Route path="/LoginAlumno" element={<LoginAlumno />} exact />
          <Route path="/LoginProfesor" element={<LoginProfesor />} exact />
          <Route path="/Prohibido" element={<Prohibido />} exact />

          
          <Route path="/HomeAdmin/" element={<ProtectedRoute element={HomeAdmin} rol={['Admin']} />} exact />
          <Route path="/HomeAlumno/" element={<ProtectedRoute element={HomeAlumno} rol={['alumno']} />} exact />
          <Route path="/HomeProfesor/" element={<ProtectedRoute element={HomeProfesor} rol={['profesor']} />} exact />
         

          <Route path="/AddAdmin" element={<ProtectedRoute element={AddAdmin} rol={['Admin']} />} exact />
          <Route path="/AddAlumno" element={<ProtectedRoute element={AddAlumno} rol={['Admin']} />} exact />
          <Route path="/AddCurso" element={<ProtectedRoute element={AddCurso} rol={['Admin']} />} exact />
          <Route path="/AddProfesor" element={<ProtectedRoute element={AddProfesor} rol={['Admin']} />} exact />

          <Route path="/AdminAdmin" element={<ProtectedRoute element={AdminAdmin} rol={['Admin']} />} exact />
          <Route path="/AdminAlumno" element={<ProtectedRoute element={AdminAlumno} rol={['Admin']} />} exact />
          <Route path="/AdminCurso" element={<ProtectedRoute element={AdminCurso} rol={['Admin']} />} exact />
          <Route path="/AdminProfesor" element={<ProtectedRoute element={AdminProfesor} rol={['Admin']} />} exact />

          <Route path="/EditAdmin/:id" element={<ProtectedRoute element={EditAdmin} rol={['Admin']} />} exact />
          <Route path="/EditAlumno/:id" element={<ProtectedRoute element={EditAlumno} rol={['Admin']} />} exact />
          <Route path="/EditCurso/:id" element={<ProtectedRoute element={EditCurso} rol={['Admin']} />} exact />
          <Route path="/EditProfesor/:id" element={<ProtectedRoute element={EditProfesor} rol={['Admin']} />} exact />

          <Route path="/AlumnoTicket" element={<ProtectedRoute element={AlumnoTicket} rol={['alumno']} />} exact />
          <Route path="/AlumnoJuego" element={<ProtectedRoute element={AlumnoJuego} rol={['alumno']} />} exact />
          <Route path="/AddRespuesta/:id_recurso_profesor" element={<ProtectedRoute element={AddRespuesta} rol={['alumno']} />} exact />

          <Route path="/ProfesorTicket" element={<ProtectedRoute element={ProfesorTicket} rol={['profesor']} />} exact />
          <Route path="/ProfesorCurso/:id_curso" element={<ProtectedRoute element={ProfesorCurso} rol={['profesor']} />} exact />
          <Route path="/ProfesorTarea/:id_curso" element={<ProtectedRoute element={ProfesorTarea} rol={['profesor']} />} exact />
          <Route path="/ProfesorRespuesta/:id_recurso_profesor" element={<ProtectedRoute element={ProfesorRespuesta} rol={['profesor']} />} exact />
          <Route path="/AddTarea/:id_curso" element={<ProtectedRoute element={AddTarea} rol={['profesor']} />} exact />
        </Routes>
      </Router>
      </authContext.Provider>
    </div>
  );
}

export default App;
