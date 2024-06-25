import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeAdmin from './pages/VistaAdmin/HomeAdmin';
import HomeAlumno from './pages/VistaAlumno/HomeAlumno';
import HomeProfesor from './pages/VistaProfesor/HomeProfesor';
import LoginAlumno from './pages/Logins/LoginAlumno';

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

import AlumnoTarea from './pages/VistaAlumno/AlumnoTarea';
import AlumnoJuego from './pages/VistaAlumno/AlumnoJuego';

import ProfesorCurso from './pages/VistaProfesor/ProfesorCurso';
import ProfesorAlumno from './pages/VistaProfesor/ProfesorAlumno';
import ProfesorTarea from './pages/VistaProfesor/ProfesorTarea';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginAlumno />} exact />
          <Route path="/HomeAdmin/" element={<HomeAdmin />} exact />
          <Route path="/HomeAlumno/" element={<HomeAlumno />} exact />
          <Route path="/HomeProfesor/" element={<HomeProfesor />} exact />

          <Route path="/AddAdmin" element={<AddAdmin />} exact />
          <Route path="/AddAlumno" element={<AddAlumno />} exact />
          <Route path="/AddCurso" element={<AddCurso />} exact />
          <Route path="/AddProfesor" element={<AddProfesor />} exact />

          <Route path="/AdminAdmin" element={<AdminAdmin />} exact />
          <Route path="/AdminAlumno" element={<AdminAlumno />} exact />
          <Route path="/AdminCurso" element={<AdminCurso />} exact />
          <Route path="/AdminProfesor" element={<AdminProfesor />} exact />

          <Route path="/EditAdmin/:id" element={<EditAdmin />} exact />
          <Route path="/EditAlumno/:id" element={<EditAlumno />} exact />
          <Route path="/EditCurso/:id" element={<EditCurso />} exact />
          <Route path="/EditProfesor/:id" element={<EditProfesor />} exact />

          <Route path="/AlumnoTarea" element={<AlumnoTarea />} exact />
          <Route path="/AlumnoJuego" element={<AlumnoJuego />} exact />

          <Route path="/ProfesorCurso/:id_curso" element={<ProfesorCurso />} exact />
          <Route path="/ProfesorAlumno/:id_curso" element={<ProfesorAlumno />} exact />
          <Route path="/ProfesorTarea/:id_curso" element={<ProfesorTarea />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
