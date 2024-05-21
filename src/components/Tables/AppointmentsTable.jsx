import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const AppointmentsTable = ({ randevularım }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const handleDeleteAppointment = (id) => {
    navigate(`/hasta/randevusil?id=${id}`);
  };

  const handleUpdateAppointment = (id) => {
    navigate(`/hasta/randevugüncelle?id=${id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = randevularım.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-center">#</th>
            <th className="py-2 px-4 border-b text-center">Tarih</th>
            <th className="py-2 px-4 border-b text-center">Saat</th>
            <th className="py-2 px-4 border-b text-center">Hastane</th>
            <th className="py-2 px-4 border-b text-center">Klinik</th>
            <th className="py-2 px-4 border-b text-center">Doktor ID</th>
            <th className="py-2 px-4 border-b text-center">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((appointment, index) => {
            const date = new Date(appointment.date);
            const formattedDate = format(date, "yyyy-MM-dd");
            const formattedTime = format(date, "HH:mm");

            return (
              <tr key={appointment.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-center">{indexOfFirstItem + index + 1}</td>
                <td className="py-2 px-4 border-b text-center">{formattedDate}</td>
                <td className="py-2 px-4 border-b text-center">{formattedTime}</td>
                <td className="py-2 px-4 border-b text-center">{appointment.hospitalName}</td>
                <td className="py-2 px-4 border-b text-center">{appointment.clinic}</td>
                <td className="py-2 px-4 border-b text-center">{appointment.doctorId}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleUpdateAppointment(appointment.id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:ring focus:border-yellow-300"
                  >
                    Güncelle
                  </button>
                  <button
                    onClick={() => handleDeleteAppointment(appointment.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring focus:border-red-300"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Önceki
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastItem >= randevularım.length}
          className="mx-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

AppointmentsTable.propTypes = {
  randevularım: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      hospitalName: PropTypes.string.isRequired,
      clinic: PropTypes.string.isRequired,
      patientId: PropTypes.string.isRequired,
      doctorId: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AppointmentsTable;