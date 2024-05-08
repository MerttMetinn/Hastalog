import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPatientOpen, setPatientOpen] = useState(false);
  const [isAdminOpen, setAdminOpen] = useState(false);
  const [isDoctorOpen, setDoctorOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePatientToggle = () => {
    setPatientOpen(!isPatientOpen);
  };

  const handleDoctorToggle = () => {
    setDoctorOpen(!isDoctorOpen);
  };

  const handleAdminToggle = () => {
    setAdminOpen(!isAdminOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/anasayfa/admin">
            <div className="flex items-center text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
              <RiAdminLine className="text-white font-semibold text-2xl" />
              <span className="ml-1">Hoşgeldiniz - Admin</span>
            </div>
          </Link>
          <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/anasayfa/admin"
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
                  <Link
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={handlePatientToggle}
                  >
                    Hasta İşlemleri
                  </Link>
                  {isPatientOpen && (
                    <ul className="absolute right-1/4 top-full z-20 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Hasta Ekle
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Hasta Sil
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm hastaları görüntüle
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id bazlı Hasta
                      </Link>
                    </ul>
                  )}
                  <Link
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={handleDoctorToggle}
                  >
                    Doktor İşlemleri
                  </Link>
                  {isDoctorOpen && (
                    <ul className="absolute right-1/4 top-full z-20 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Doktor Ekle
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Doktor Sil
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Doktorları görüntüle
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id bazlı Doktor
                      </Link>
                    </ul>
                  )}
                  <Link
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={handleAdminToggle}
                  >
                    Admin İşlemleri
                  </Link>
                  {isAdminOpen && (
                    <ul className="absolute right-1/4 top-full z-20 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Admin Ekle
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Admin Sil
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Adminleri görüntüle
                      </Link>
                      <Link
                        to="/hasta/randevual"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id bazlı Admin
                      </Link>
                    </ul>
                  )}
                  <Link
                    to="/hasta/tıbbiraporlarım"
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Tıbbi Rapor İşlemleri
                  </Link>
                  <Link
                    to="/hasta/tıbbiraporlarım"
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Randevu İşlemleri
                  </Link>
                  <Link
                    to="/hasta/bilgilerim"
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Bilgilerim
                  </Link>
                </ul>
              )}
              <Link
                to="#"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Çıkış Yap
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
