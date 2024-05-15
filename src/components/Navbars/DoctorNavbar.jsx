import { useState } from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

const DoctorNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Çıkış Yap',
      text: 'Çıkış yapmak istediğinizden emin misiniz?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Çıkış Yap',
      cancelButtonText: 'Sayfada Kal',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        notify();
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    });
  };
  
  const notify = () =>
    toast.info("Çıkış yapılıyor!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <Link to="/anasayfa/doktor">
        <div className="flex items-center text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
          <FaUserDoctor className="text-white font-semibold text-2xl" />
          <span className="ml-1">Hoşgeldiniz - Doktor</span>
        </div>
      </Link>
      <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/anasayfa/doktor"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Anasayfa
              </Link>
              <button
                className="relative text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleDropdownToggle}
              >
                İşlemlerim
              </button>
              {isOpen && (
                <ul className="absolute left-1/4 top-full z-20 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <Link to="/anasayfa/hasta" className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md">
                    Hastalarım
                  </Link>
                  <li className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md">
                    Randevular
                  </li>
                  <li className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md">
                    Tıbbi Raporlar
                  </li>
                  <li className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md">
                    Bilgilerim
                  </li>
                </ul>
              )}
              <Link
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleLogout}
              >
                Çıkış Yap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DoctorNavbar;