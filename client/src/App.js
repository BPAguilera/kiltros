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

import ProfesorCurso from './pages/ProfesorCurso';
import ProfesorAlumno from './pages/ProfesorAlumno';
import ProfesorTarea from './pages/ProfesorTarea';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
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

          <Route path="/ProfesorCurso" element={<ProfesorCurso />} exact />
          <Route path="/ProfesorAlumno/:id_curso" element={<ProfesorAlumno />} exact />
          <Route path="/ProfesorTarea/:id_curso" element={<ProfesorTarea />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
