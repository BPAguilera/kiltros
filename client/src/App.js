import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeAdmin from './pages/HomeAdmin';
import HomeAlumno from './pages/HomeAlumno';
import HomeProfesor from './pages/HomeProfesor';
import Login from './pages/Login';

import AddAdmin from './pages/AddAdmin';
import AddAlumno from './pages/AddAlumno';
import AddCurso from './pages/AddCurso';
import AddProfesor from './pages/AddProfesor';

import AdminAdmin from './pages/AdminAdmin';
import AdminAlumno from "./pages/AdminAlumno";
import AdminCurso from "./pages/AdminCurso";
import AdminProfesor from './pages/AdminProfesor';

import EditAdmin from './pages/EditAdmin';
import EditAlumno from './pages/EditAlumno';
import EditCurso from './pages/EditCurso';
import EditProfesor from './pages/EditProfesor';

import AlumnoTarea from './pages/AlumnoTarea';
import AlumnoJuego from './pages/AlumnoJuego';
import LoginAlumno from './pages/LoginAlumno';

import ProfesorCurso from './pages/ProfesorCurso';
import ProfesorAlumno from './pages/ProfesorAlumno';
import ProfesorTarea from './pages/ProfesorTarea';

import Prohibido from './pages/Prohibido';

import { authContext } from './helpers/authContext'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProtectedRoute from './helpers/ProtectedRoute'; // Asegúrate de importar el componente

function App() {
  const [authState, setAuthState] = useState(() => {
    const savedAuthState = localStorage.getItem('authState');
    return savedAuthState ? JSON.parse(savedAuthState) : { usuario: "", id: 0, rol: "", state: false };
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
        };
        setAuthState(newAuthState);
        localStorage.setItem('authState', JSON.stringify(newAuthState));
      } else {
        const newAuthState = {
          usuario: response.data.usuario,
          id: response.data.id,
          rol: response.data.rol,
          state: true,
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
            <Route path="/" element={<Login />} exact />
            <Route path="/HomeAdmin" element={<ProtectedRoute element={HomeAdmin} rol={['Admin']} />} exact />
            <Route path="/HomeAlumno" element={<ProtectedRoute element={HomeAlumno} rol={['alumno']} />} exact />
            <Route path="/HomeProfesor" element={<ProtectedRoute element={HomeProfesor} rol={['profesor']} />} exact />

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

            <Route path="/AlumnoTarea" element={<ProtectedRoute element={AlumnoTarea} rol={['alumno']} />} exact />
            <Route path="/AlumnoJuego" element={<ProtectedRoute element={AlumnoJuego} rol={['alumno']} />} exact />
            <Route path="/LoginAlumno" element={<LoginAlumno />} exact />

            <Route path="/ProfesorCurso" element={<ProtectedRoute element={ProfesorCurso} rol={['profesor']} />} exact />
            <Route path="/ProfesorAlumno/:id_curso" element={<ProtectedRoute element={ProfesorAlumno} rol={['profesor']} />} exact />
            <Route path="/ProfesorTarea/:id_curso" element={<ProtectedRoute element={ProfesorTarea} rol={['profesor']} />} exact />
            <Route path="/Prohibido" element={<Prohibido/>} exact />
          </Routes>
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App;
