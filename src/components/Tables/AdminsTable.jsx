import PropTypes from 'prop-types';

const AdminsTable = ({ adminler }) => {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            {['ID','Ad', 'Soyad', 'E-posta', 'Şifre'].map((header) => (
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
          {adminler.map((admin) => (
            <tr key={admin.id} className="hover:bg-gray-100 text-sm text-center">
              <td className="border border-gray-200 px-2 py-2">{admin.id}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.name}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.surname}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.email}</td>
              <td className="border border-gray-200 px-2 py-2">{admin.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

AdminsTable.propTypes = {
    adminler: PropTypes.array.isRequired,
};

export default AdminsTable;