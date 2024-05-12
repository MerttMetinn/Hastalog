import PropTypes from 'prop-types';

const PatientsTable = ({ hastalar }) => {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            {['ID','Ad', 'Soyad', 'E-posta', 'Şifre','Doğum Tarihi', 'Cinsiyet', 'Telefon', 'Adres'].map((header) => (
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
          {hastalar.map((hasta) => (
            <tr key={hasta.id} className="hover:bg-gray-100 text-xs">
              <td className="border border-gray-200 px-2 py-2">{hasta.id}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.name}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.surname}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.email}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.password}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.birthDate}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.gender ? "Erkek" : "Kadın"}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.phoneNumber}</td>
              <td className="border border-gray-200 px-2 py-2">{hasta.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PatientsTable.propTypes = {
  hastalar: PropTypes.array.isRequired,
};

export default PatientsTable;
