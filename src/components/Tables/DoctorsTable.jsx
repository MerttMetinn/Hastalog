import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorsTable = ({ doktorlar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  const handleDelete = (id) => {
    navigate(`/admin/doktorsil?id=${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/admin/ıdbazlıdoktor?id=${id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = doktorlar.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(doktorlar.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4 overflow-x-auto">
      <table className="border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200 bg-gray-100">Sıra</th>
            {[
              'ID', 'Ad', 'Soyad', 'E-posta', 'Şifre', 'Doğum Tarihi', 'Cinsiyet', 
              'Telefon', 'Adres', 'Uzmanlık Alanı', 'Hastane Adı', 'Düzenle', 'Sil'
            ].map((header) => (
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
          {currentItems.map((doktor, index) => (
            <tr key={doktor.id} className="hover:bg-gray-100 text-xs text-center">
              <td className="border border-gray-200 px-2 py-2">{indexOfFirstItem + index + 1}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.id}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.name}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.surname}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.email}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.password}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.birthDate}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.gender ? "Erkek" : "Kadın"}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.phoneNumber}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.address}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.specializationArea}</td>
              <td className="border border-gray-200 px-2 py-2">{doktor.hospitalName}</td>
              <td className="border border-gray-200 px-2 py-2">
                <button
                  onClick={() => handleEdit(doktor.id)}
                  className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                >
                  Düzenle
                </button>
              </td>
              <td className="border border-gray-200 px-2 py-2">
                <button
                  onClick={() => handleDelete(doktor.id)}
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

DoctorsTable.propTypes = {
  doktorlar: PropTypes.array.isRequired,
};

export default DoctorsTable;
