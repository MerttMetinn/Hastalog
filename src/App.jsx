import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/LoginPages/AdminLogin";
import DoctorLogin from "./components/LoginPages/DoctorLogin";
import PatientLogin from "./components/LoginPages/PatientLogin";
import HomePage from "./components/HomePage";
import Admin from "./components/Routes/Admin/Admin-Main";
import Doctor from "./components/Routes/Doctor/Doctor-Main";
import Patient from "./components/Routes/Patient/Patient-Main"
import RShowAppointment from "./components/Routes/Patient/Operations/Appointment/RShowAppointments"
import RBookAppointment from "./components/Routes/Patient/Operations/Appointment/RBookAppointment"
import RShowMedicalReports from "./components/Routes/Patient/Operations/MedicalReports/RShowMedicalReports";
import RMyInformations from "./components/Routes/Patient/Operations/General/RMyInformations";
import RAdminAddPatient from "./components/Routes/Admin/Operations/Admin/RAddPatient";
import RAdminDeletePatient from "./components/Routes/Admin/Operations/Admin/RDeletePatient";
import RAdminGetAllPatients from "./components/Routes/Admin/Operations/Admin/RGetAllPatients";
import RAdminGetByIdPatient from "./components/Routes/Admin/Operations/Admin/RGetByIdPatient";

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

        <Route path="/admin/hastaekle" element={<RAdminAddPatient />} />
        <Route path="/admin/hastasil" element={<RAdminDeletePatient />} />
        <Route path="/admin/tümhastalar" element={<RAdminGetAllPatients />} />
        <Route path="/admin/ıdbazlıhasta" element={<RAdminGetByIdPatient />} />


        <Route path="/hasta/randevual" element={<RBookAppointment />} />
        <Route path="/hasta/randevularım" element={<RShowAppointment />} />   
        <Route path="/hasta/tıbbiraporlarım" element={<RShowMedicalReports />} />             
        <Route path="/hasta/bilgilerim" element={<RMyInformations />} />        

      </Routes>
    </Router>
  );
}

export default App;
