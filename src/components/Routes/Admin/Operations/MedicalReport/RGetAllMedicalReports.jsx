import GetAllMedicalReports from "../../../../Operations/Admin/MedicalReport/GetAllMedicalReports"
import AdminNavbar from "../../../../Navbars/AdminNavbar" 

const RGetAllMedicalReports = () => {
  return (
    <div>
      <AdminNavbar/>
      <GetAllMedicalReports />
    </div>
  )
}

export default RGetAllMedicalReports
