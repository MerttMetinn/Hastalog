import { Link } from "react-router-dom";
import { FaUserShield, FaUserMd, FaUserInjured } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600">
      <main className="flex flex-1 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <Link
            to="/login/hasta"
            className="bg-blue-200 hover:bg-blue-300 text-gray-800 font-bold py-6 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center space-y-4"
          >
            <FaUserInjured className="text-4xl text-blue-500" />
            <span className="text-xl">Hasta Girişi</span>
          </Link>
          <Link
            to="/login/doktor"
            className="bg-green-200 hover:bg-green-300 text-gray-800 font-bold py-6 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center space-y-4"
          >
            <FaUserMd className="text-4xl text-green-500" />
            <span className="text-xl">Doktor Girişi</span>
          </Link>
          <Link
            to="/login/admin"
            className="bg-red-200 hover:bg-red-300 text-gray-800 font-bold py-6 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center space-y-4"
          >
            <FaUserShield className="text-4xl text-red-600" />
            <span className="text-xl">Admin Girişi</span>
          </Link>
        </div>
      </main>
      <header className="text-center py-4 bg-gray-200 shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Hoş Geldiniz</h1>
        <p className="text-base text-gray-600 mt-2">
          Lütfen giriş yapmak istediğiniz rolü seçin
        </p>
      </header>
    </div>
  );
};

export default HomePage;
