import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/LoginPages/AdminLogin";
import DoctorLogin from "./components/LoginPages/DoctorLogin";
import PatientLogin from "./components/LoginPages/PatientLogin";
import HomePage from "./components/HomePage";
import DoctorHome from "./components/Home/DoctorHome";
import AdminHome from "./components/Home/AdminHome";
import PatientHome from "./components/Home/PatientHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/doktor" element={<DoctorLogin />} />
        <Route path="/login/hasta" element={<PatientLogin />} />

        <Route path="/anasayfa/admin" element={<AdminHome />} />
        <Route path="/anasayfa/doktor" element={<DoctorHome />} />
        <Route path="/anasayfa/hasta" element={<PatientHome />} />
      </Routes>
    </Router>
  );
}

export default App;
