import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientsTable = ({ hastalar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editMode, setEditMode] = useState(null); // Düzenleme modunu takip etmek için durum ekleyelim
  const [editedPatient, setEditedPatient] = useState(null); // Düzenlenen hasta verilerini tutmak için

  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleEdit = (hasta) => {
    setEditMode(hasta.id);
    setEditedPatient(hasta); // Düzenlenen hasta verilerini ayarla
  };

  const handleSave = () => {
    // Burada kayıt işlemi yapılabilir, örneğin bir API çağrısı ile
    setEditMode(null);
    setEditedPatient(null);
  };

  const handleDelete = (id) => {
    navigate(`/admin/hastasil?id=${id}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPatient({ ...editedPatient, [name]: value });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hastalar.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(hastalar.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4 overflow-x-auto">
      <table className="border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-200 bg-gray-100">
              Sıra
            </th>
            {[
              "ID",
              "Ad",
              "Soyad",
              "E-posta",
              "Şifre",
              "Doğum Tarihi",
              "Cinsiyet",
              "Telefon",
              "Adres",
              "Düzenle",
              "Sil",
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
          {currentItems.map((hasta, index) => (
            <tr
              key={hasta.id}
              className="hover:bg-gray-100 text-xs text-center"
            >
              <td className="border border-gray-200 px-2 py-2">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="id"
                    value={editedPatient.id}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.id
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedPatient.name}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.name
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="surname"
                    value={editedPatient.surname}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.surname
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="email"
                    value={editedPatient.email}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.email
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="password"
                    value={editedPatient.password}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.password
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="birthDate"
                    value={editedPatient.birthDate}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.birthDate
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <select
                    name="gender"
                    value={editedPatient.gender}
                    onChange={handleChange}
                  >
                    <option value="true">Erkek</option>
                    <option value="false">Kadın</option>
                  </select>
                ) : hasta.gender ? (
                  "Erkek"
                ) : (
                  "Kadın"
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="phoneNumber"
                    value={editedPatient.phoneNumber}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.phoneNumber
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <input
                    type="text"
                    name="address"
                    value={editedPatient.address}
                    onChange={handleChange}
                  />
                ) : (
                  hasta.address
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                {editMode === hasta.id ? (
                  <button
                    onClick={handleSave}
                    className="bg-white border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring focus:border-green-300"
                  >
                    Kaydet
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(hasta)}
                    className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Düzenle
                  </button>
                )}
              </td>
              <td className="border border-gray-200 px-2 py-2">
                <button
                  onClick={() => handleDelete(hasta.id)}
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
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

PatientsTable.propTypes = {
  hastalar: PropTypes.array.isRequired,
};

export default PatientsTable;
