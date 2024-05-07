import { useState } from 'react';
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <Link href="/">
        <a className="flex items-center text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
          <RiAdminLine className="text-white font-semibold text-xl" />
          <span className="ml-1">Hoşgeldiniz - Admin</span>
        </a>
      </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Anasayfa</Link>
              <a href="#services" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">İşlemlerim</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Çıkış Yap</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#about" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#services" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#contact" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;