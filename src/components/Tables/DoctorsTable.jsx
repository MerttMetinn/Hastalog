import PropTypes from 'prop-types';

const DoctorsTable = ({ doktorlar }) => {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            {['ID','Ad', 'Soyad', 'E-posta', 'Şifre','Doğum Tarihi', 'Cinsiyet', 'Telefon', 'Adres', 'Uzmanlık Alanı', 'Hastane Adı'].map((header) => (
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
          {doktorlar.map((doktor) => (
            <tr key={doktor.id} className="hover:bg-gray-100 text-xs">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DoctorsTable.propTypes = {
  doktorlar: PropTypes.array.isRequired,
};

export default DoctorsTable;
