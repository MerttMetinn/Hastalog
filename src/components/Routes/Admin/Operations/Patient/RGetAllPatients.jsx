import GetAllPatients from "../../../../Operations/Admin/Patient/GetAllPatients"
import AdminNavbar from "../../../../Navbars/AdminNavbar" 

const RGetAllPatients = () => {
  return (
    <div>
      <AdminNavbar/>
      <GetAllPatients />
    </div>
  )
}

export default RGetAllPatients
