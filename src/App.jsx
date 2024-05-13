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

import RAdminAddPatient from "./components/Routes/Admin/Operations/Patient/RAddPatient";
import RAdminDeletePatient from "./components/Routes/Admin/Operations/Patient/RDeletePatient";
import RAdminGetAllPatients from "./components/Routes/Admin/Operations/Patient/RGetAllPatients";
import RAdminGetByIdPatient from "./components/Routes/Admin/Operations/Patient/RGetByIdPatient";

import RAdminAddDoctor from "./components/Routes/Admin/Operations/Doctor/RAddDoctor";
import RAdminDeleteDoctor from "./components/Routes/Admin/Operations/Doctor/RDeleteDoctor";
import RAdminGetAllDoctors from "./components/Routes/Admin/Operations/Doctor/RGetAllDoctors";
import RAdminGetByIdDoctor from "./components/Routes/Admin/Operations/Doctor/RGetByIdDoctor";

import RAdminAddAdmin from "./components/Routes/Admin/Operations/Admin/RAddAdmin";
import RAdminDeleteAdmin from "./components/Routes/Admin/Operations/Admin/RDeleteAdmin";
import RAdminGetAllAdmins from "./components/Routes/Admin/Operations/Admin/RGetAllAdmins";
import RAdminGetByIdAdmin from "./components/Routes/Admin/Operations/Admin/RGetByIdAdmin";

import RAddMedicalReport from "./components/Routes/Admin/Operations/MedicalReport/RAddMedicalReport";
import RDeleteMedicalReport from "./components/Routes/Admin/Operations/MedicalReport/RDeleteMedicalReport";
import RGetAllMedicalReports from "./components/Routes/Admin/Operations/MedicalReport/RGetAllMedicalReports";
import RGetByIdMedicalReports from "./components/Routes/Admin/Operations/MedicalReport/RGetByIdMedicalReports";

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

        <Route path="/admin/doktorekle" element={<RAdminAddDoctor />} />
        <Route path="/admin/doktorsil" element={<RAdminDeleteDoctor />} />
        <Route path="/admin/tümdoktorlar" element={<RAdminGetAllDoctors />} />
        <Route path="/admin/ıdbazlıdoktor" element={<RAdminGetByIdDoctor />} />

        <Route path="/admin/adminekle" element={<RAdminAddAdmin />} />
        <Route path="/admin/adminsil" element={<RAdminDeleteAdmin />} />
        <Route path="/admin/tümadminler" element={<RAdminGetAllAdmins />} />
        <Route path="/admin/ıdbazlıadmin" element={<RAdminGetByIdAdmin />} />

        <Route path="/admin/tıbbiraporekle" element={<RAddMedicalReport />} />
        <Route path="/admin/tıbbiraporsil" element={<RDeleteMedicalReport />} />
        <Route path="/admin/tümtıbbiraporlar" element={<RGetAllMedicalReports />} />
        <Route path="/admin/ıdbazlıtıbbirapor" element={<RGetByIdMedicalReports />} />

        <Route path="/hasta/randevual" element={<RBookAppointment />} />
        <Route path="/hasta/randevularım" element={<RShowAppointment />} />   
        <Route path="/hasta/tıbbiraporlarım" element={<RShowMedicalReports />} />             
        <Route path="/hasta/bilgilerim" element={<RMyInformations />} />        

      </Routes>
    </Router>
  );
}

export default App;
