import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AdminsTable = ({ adminler }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/admin/ıdbazlıadmin?id=${id}`);
  };

  const handleDeleteAdmin = (id) => {
    navigate(`/admin/adminsil?id=${id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = adminler.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(adminler.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4 overflow-x-auto">
      <table className="border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200 bg-gray-100">Sıra</th>
            {['ID', 'Ad', 'Soyad', 'E-posta', 'Şifre', 'Detaylar', 'Sil'].map((header) => (
              <th
                key={header}
                className="px-4 py-2 border border-gray-200 bg-gray-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((admin, index) => (
            <tr key={admin.id} className="hover:bg-gray-100 text-sm text-center">
              <td className="border border-gray-200 px-2 py-2">{indexOfFirstItem + index + 1}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.id}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.name}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.surname}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.email}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.password}</td>
              <td className="border border-gray-200 px-2 py-2">
                <button
                  onClick={() => handleViewDetails(admin.id)}
                  className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                >
                  Görüntüle
                </button>
              </td>
              <td className="border border-gray-200 px-2 py-2">
                <button
                  onClick={() => handleDeleteAdmin(admin.id)}
                  className="bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring focus:border-red-300"
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

AdminsTable.propTypes = {
  adminler: PropTypes.array.isRequired,
};

export default AdminsTable;
