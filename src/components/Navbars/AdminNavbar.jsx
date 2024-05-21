import { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPatientOpen, setPatientOpen] = useState(false);
  const [isAdminOpen, setAdminOpen] = useState(false);
  const [isDoctorOpen, setDoctorOpen] = useState(false);
  const [isMedicalReportOpen, setMedicalReportOpen] = useState(false);
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
    setPatientOpen(false);
    setDoctorOpen(false);
    setAdminOpen(false);
    setMedicalReportOpen(false);
    setAppointmentOpen(false);
  };

  const handlePatientToggle = () => {
    setPatientOpen(!isPatientOpen);
    setDoctorOpen(false);
    setAdminOpen(false);
    setMedicalReportOpen(false);
    setAppointmentOpen(false);
  };

  const handleDoctorToggle = () => {
    setDoctorOpen(!isDoctorOpen);
    setPatientOpen(false);
    setAdminOpen(false);
    setMedicalReportOpen(false);
    setAppointmentOpen(false);
  };

  const handleAdminToggle = () => {
    setAdminOpen(!isAdminOpen);
    setPatientOpen(false);
    setDoctorOpen(false);
    setMedicalReportOpen(false);
    setAppointmentOpen(false);
  };

  const handleMedicalReportToggle = () => {
    setMedicalReportOpen(!isMedicalReportOpen);
    setPatientOpen(false);
    setDoctorOpen(false);
    setAdminOpen(false);
    setAppointmentOpen(false);
  };

  const handleAppointmentToggle = () => {
    setAppointmentOpen(!isAppointmentOpen);
    setPatientOpen(false);
    setDoctorOpen(false);
    setAdminOpen(false);
    setMedicalReportOpen(false);
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
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/anasayfa/admin">
            <div className="flex items-center text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">
              <FaUserShield className="text-white font-semibold text-2xl" />
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
                      <Link
                        to="/admin/admingüncelle"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Admin Güncelle
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
                    <ul className="absolute left-full top-0 z-20 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ marginTop: '120px' }}>
                      <Link
                        to="/admin/tıbbiraporekle"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tıbbi Rapor Ekle
                      </Link>
                      <Link
                        to="/admin/tıbbiraporsil"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tıbbi Rapor Sil
                      </Link>
                      <Link
                        to="/admin/tümtıbbiraporlar"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Raporları Görüntüle
                      </Link>
                      <Link
                        to="/admin/ıdbazlıtıbbirapor"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Id Bazlı Tıbbi Rapor
                      </Link>
                    </ul>
                  )}
                  <Link
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                    onClick={handleAppointmentToggle}
                  >
                    Randevu İşlemleri
                  </Link>
                  {isAppointmentOpen && (
                      <ul className="absolute left-full top-0 z-20 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ marginTop: '160px' }}>
                      <Link
                        to="/admin/randevusil"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Randevu Sil
                      </Link>
                      <Link
                        to="/admin/tümrandevular"
                        className="block px-4 py-3 text-xs text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tüm Randevuları Görüntüle
                      </Link>
                    </ul>
                    )
                  }
                  <Link
                    to="/admin/bilgilerim"
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
