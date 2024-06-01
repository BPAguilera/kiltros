import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeAdmin from './pages/HomeAdmin';

import AddAdmin from './pages/AddAdmin';
import AddAlumno from './pages/AddAlumno';
import AddCurso from './pages/AddCurso';
import AddProfesor from './pages/AddProfesor';

import AdminAdmin from './pages/AdminAdmin';
import AdminAlumno from "./pages/AdminAlumno";
import AdminCurso from "./pages/AdminCurso";
import AdminProfesor from './pages/AdminProfesor';

import EditAlumno from './pages/EditAlumno';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/HomeAdmin/" element={<HomeAdmin/>} exact />

          <Route path="/AddAdmin" element={<AddAdmin/>} exact />
          <Route path="/AddAlumno" element={<AddAlumno/>} exact />
          <Route path="/AddCurso" element={<AddCurso/>} exact />
          <Route path="/AddProfesor" element={<AddProfesor/>} exact />

          <Route path="/AdminAdmin" element={<AdminAdmin/>} exact />
          <Route path="/AdminAlumno" element={<AdminAlumno/>} exact />
          <Route path="/AdminCurso" element={<AdminCurso/>} exact />
          <Route path="/AdminProfesor" element={<AdminProfesor/>} exact />
          
          <Route path="/EditAlumno/:id" element={<EditAlumno/>} exact />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
