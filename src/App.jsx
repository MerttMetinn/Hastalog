import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AdminLogin from "./components/LoginPages/AdminLogin";
import DoctorLogin from "./components/LoginPages/DoctorLogin";
import PatientLogin from "./components/LoginPages/PatientLogin";

import Admin from "./components/Routes/Admin/Admin-Main";
import Doctor from "./components/Routes/Doctor/Doctor-Main";
import Patient from "./components/Routes/Patient/Patient-Main"

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
import RUpdateAdmin from "./components/Routes/Admin/Operations/Admin/RUpdateAdmin";

import RAdminAddMedicalReport from "./components/Routes/Admin/Operations/MedicalReport/RAddMedicalReport";
import RAdminDeleteMedicalReport from "./components/Routes/Admin/Operations/MedicalReport/RDeleteMedicalReport";
import RAdminGetAllMedicalReports from "./components/Routes/Admin/Operations/MedicalReport/RGetAllMedicalReports";
import RAdminGetByIdMedicalReports from "./components/Routes/Admin/Operations/MedicalReport/RGetByIdMedicalReports";

import RAdminDeleteAppointment from "./components/Routes/Admin/Operations/Appointment/RDeleteAppointment";

import RDoctorAddMedicalReport from "./components/Routes/Doctor/Operations/MedicalReport/RAddMedicalReport";
import RDoctorDeleteMedicalReport from "./components/Routes/Doctor/Operations/MedicalReport/RDeleteMedicalReport";
import RDoctorUpdateMedicalReport from "./components/Routes/Doctor/Operations/MedicalReport/RUpdateMedicalReport";
import RDoctorMyInformations from "./components/Routes/Doctor/General/RMyInformations";

import RBookAppointment from "./components/Routes/Patient/Operations/Appointment/RBookAppointment";
import RMyAppointments from "./components/Routes/Patient/Operations/Appointment/RMyAppointments";
import RShowMedicalReports from "./components/Routes/Patient/Operations/MedicalReports/RShowMedicalReports";
import RMyInformations from "./components/Routes/Patient/Operations/General/RMyInformations";
import RUpdateAppointment from "./components/Routes/Patient/Operations/Appointment/RUpdateAppointment";
import RDeleteAppointment from "./components/Routes/Patient/Operations/Appointment/RDeleteAppointment";


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
        <Route path="/admin/admingüncelle" element={<RUpdateAdmin />} />


        <Route path="/admin/tıbbiraporekle" element={<RAdminAddMedicalReport />} />
        <Route path="/admin/tıbbiraporsil" element={<RAdminDeleteMedicalReport />} />
        <Route path="/admin/tümtıbbiraporlar" element={<RAdminGetAllMedicalReports />} />
        <Route path="/admin/ıdbazlıtıbbirapor" element={<RAdminGetByIdMedicalReports />} />

        <Route path="/admin/randevusil" element={<RAdminDeleteAppointment />} />
        <Route path="/admin/tümrandevular" element={<RAdminDeleteAppointment />} />

        <Route path="/doktor/tıbbiraporekle" element={< RDoctorAddMedicalReport/>} />
        <Route path="/doktor/tıbbiraporsil" element={< RDoctorDeleteMedicalReport/>} />
        <Route path="/doktor/tıbbiraporgüncelle" element={< RDoctorUpdateMedicalReport/>} />
        <Route path="/doktor/bilgilerim" element={<RDoctorMyInformations />} />        


        <Route path="/hasta/randevual" element={<RBookAppointment />} />
        <Route path="/hasta/randevularım" element={<RMyAppointments />} /> 
        <Route path="/hasta/randevugüncelle" element={<RUpdateAppointment />} />  
        <Route path="/hasta/randevusil" element={<RDeleteAppointment />} /> 
        <Route path="/hasta/tıbbiraporlarım" element={<RShowMedicalReports />} />          
        <Route path="/hasta/bilgilerim" element={<RMyInformations />} />        

      </Routes>
    </Router>
  );
}

export default App;
