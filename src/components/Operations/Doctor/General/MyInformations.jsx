import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../utils/AxiosInstance";

const GetByIdDoctor = () => {
  const [doctorData, setDoctorData] = useState(null);
  const doctorId = localStorage.getItem("DoctorId");
  const navigate = useNavigate();

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    if (doctorId) {
      console.log("Fetching doctor data for ID:", doctorId);
      axiosInstance
        .get(`Doctors/GetDoctorById/${doctorId}`)
        .then((response) => {
          console.log("Doctor data received:", response.data);
          setDoctorData(response.data);
          notifySuccess("İlgili Doktorun verileri başarıyla getirildi!");
        })
        .catch((error) => {
          console.error("Doktor verileri alınamadı: ", error);
          setDoctorData(null);
          notifyError("Doktorun verileri alınamadı!");
        });
    } else {
      console.error("Doctor ID is null");
    }
  }, [doctorId]);

  const handleDeleteDoctor = () => {
    Swal.fire({
      title: "Emin misiniz?",
      text: "Bu işlem geri alınamaz!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Evet, sil!",
      cancelButtonText: "Hayır, iptal et",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleting doctor with ID:", doctorId);
        axiosInstance
          .delete(`Doctors/DeleteDoctor/${doctorId}`)
          .then(() => {
            notifySuccess("Doktor başarıyla silindi!");
            localStorage.clear(); // Yerel depolamayı temizle
            navigate("/"); // Ana menüye yönlendir
          })
          .catch((error) => {
            console.error("Doktor silinemedi: ", error);
            notifyError("Doktor silinirken bir hata oluştu!");
          });
      }
    });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 min-h-screen py-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Doktor Kimlik Kartı
        </h1>

        {doctorData ? (
          <div className="mt-8 rounded-lg overflow-hidden shadow-md bg-gray-50">
            <h2 className="text-xl font-bold mb-4 text-center py-2">
              Doktor Detayları
            </h2>
            <div className="p-4">
              <p>
                <strong>ID:</strong> {doctorData.id}
              </p>
              <p>
                <strong>Ad:</strong> {doctorData.name}
              </p>
              <p>
                <strong>Soyad:</strong> {doctorData.surname}
              </p>
              <p>
                <strong>E-posta:</strong> {doctorData.email}
              </p>
              <p>
                <strong>Şifre:</strong> {doctorData.password}
              </p>
              <p>
                <strong>Doğum Tarihi:</strong> {doctorData.birthDate}
              </p>
              <p>
                <strong>Cinsiyet:</strong> {doctorData.gender ? "Erkek" : "Kadın"}
              </p>
              <p>
                <strong>Telefon:</strong> {doctorData.phoneNumber}
              </p>
              <p>
                <strong>Adres:</strong> {doctorData.address}
              </p>
              <p>
                <strong>Uzmanlık Alanı:</strong> {doctorData.specializationArea}
              </p>
              <p>
                <strong>Hastane:</strong> {doctorData.hospitalName}
              </p>
              <div className="mt-4 text-center">
                <button
                  onClick={handleDeleteDoctor}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Hesabı Sil
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-8">
            <p>Doktor verileri yüklenemedi. Lütfen tekrar deneyin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetByIdDoctor;
