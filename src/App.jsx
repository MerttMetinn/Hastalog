import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/LoginPages/AdminLogin";
import DoctorLogin from "./components/LoginPages/DoctorLogin";
import PatientLogin from "./components/LoginPages/PatientLogin";
import HomePage from "./components/HomePage";
import Admin from "./components/Routes/Admin";
import Doctor from "./components/Routes/Patient";
import Patient from "./components/Routes/Patient"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/doktor" element={<DoctorLogin />} />
        <Route path="/login/hasta" element={<PatientLogin />} />

        <Route path="/anasayfa/admin" element={<Admin />} />
        <Route path="/anasayfa/doktor" element={<Doctor />} />
        <Route path="/anasayfa/hasta" element={<Patient />} />
      </Routes>
    </Router>
  );
}

export default App;
