import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-300">
        <Link to="/login/hasta" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Hasta Girişi
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-400">
        <Link to="/login/doktor" className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Doktor Girişi 
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-500">
        <Link to="/login/admin" className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Admin Girişi
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
