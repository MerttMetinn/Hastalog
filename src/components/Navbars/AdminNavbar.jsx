import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPatientOpen, setPatientOpen] = useState(false);
  const [isAdminOpen, setAdminOpen] = useState(false);
  const [isDoctorOpen, setDoctorOpen] = useState(false);
  const [isMedicalReportOpen, setMedicalReportOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
    setPatientOpen(false);
    setDoctorOpen(false);
    setAdminOpen(false);
    setMedicalReportOpen(false);
  };

  const handlePatientToggle = () => {
    setPatientOpen(!isPatientOpen);
    setDoctorOpen(false);
    setAdminOpen(false);
    setMedicalReportOpen(false);
  };

  const handleDoctorToggle = () => {
    setDoctorOpen(!isDoctorOpen);
    setPatientOpen(false);
    setAdminOpen(false);
    setMedicalReportOpen(false);
  };

  const handleAdminToggle = () => {
    setAdminOpen(!isAdminOpen);
    setPatientOpen(false);
    setDoctorOpen(false);
    setMedicalReportOpen(false);
  };

  const handleMedicalReportToggle = () => {
    setMedicalReportOpen(!isMedicalReportOpen);
    setPatientOpen(false);
    setDoctorOpen(false);
    setAdminOpen(false);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Çıkış Yap",
      text: "Çıkış yapmak istediğinizden emin misiniz?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Çıkış Yap",
      cancelButtonText: "Sayfada Kal",
      reverseButtons: true,
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
                    <ul className="absolute left-full top-0 z-20 mt-0 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/admin/hastaekle"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Hasta Ekle
                      </Link>
                      <Link
                        to="/admin/hastasil"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Hasta Sil
                      </Link>
                      <Link
                        to="/admin/tümhastalar"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Hastaları görüntüle
                      </Link>
                      <Link
                        to="/admin/ıdbazlıhasta"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id Bazlı Hasta
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
                    <ul className="absolute left-full top-0 z-20 mt-10 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/admin/doktorekle"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Doktor Ekle
                      </Link>
                      <Link
                        to="/admin/doktorsil"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Doktor Sil
                      </Link>
                      <Link
                        to="/admin/tümdoktorlar"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Doktorları görüntüle
                      </Link>
                      <Link
                        to="/admin/ıdbazlıdoktor"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id Bazlı Doktor
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
                    <ul className="absolute left-full top-0 z-20 mt-20 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/admin/adminekle"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Admin Ekle
                      </Link>
                      <Link
                        to="/admin/adminsil"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Admin Sil
                      </Link>
                      <Link
                        to="/admin/tümadminler"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Adminleri görüntüle
                      </Link>
                      <Link
                        to="/admin/ıdbazlıadmin"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id Bazlı Admin
                      </Link>
                    </ul>
                  )}
                  <Link
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={handleMedicalReportToggle}
                  >
                    Tıbbi Rapor İşlemleri
                  </Link>
                  {isMedicalReportOpen && (
                    <ul className="absolute left-full top-0 z-20 mt-30 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <Link
                        to="/admin/raporekle"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Rapor Ekle
                      </Link>
                      <Link
                        to="/admin/raporsil"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Rapor Sil
                      </Link>
                      <Link
                        to="/admin/tümraporlar"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Raporları Görüntüle
                      </Link>
                      <Link
                        to="/admin/ıdbazlırapor"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id Bazlı Rapor
                      </Link>
                    </ul>
                  )}
                  <Link
                    to="/hasta/randevuislemleri"
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

export default AdminNavbar;
