import GetAllDoctors from "../../../../Operations/Admin/Doctor/GetAllDoctors"
import AdminNavbar from "../../../../Navbars/AdminNavbar" 

const RGetAllDoctors = () => {
  return (
    <div>
      <AdminNavbar/>
      <GetAllDoctors />
    </div>
  )
}

export default RGetAllDoctors

