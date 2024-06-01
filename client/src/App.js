import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeAdmin from "./pages/HomeAdmin";
import AddAlumno from './pages/AddAlumno';
import EditAlumno from './pages/EditAlumno';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/HomeAdmin" element={<HomeAdmin/>} exact />
          <Route path="/AddAlumno" element={<AddAlumno/>} exact />
          <Route path="/EditAlumno/:id" element={<EditAlumno/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;