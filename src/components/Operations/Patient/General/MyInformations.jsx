import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../utils/AxiosInstance";

const GetByIdPatient = () => {
  const [patientData, setPatientData] = useState(null);
  const userId = localStorage.getItem("UserId");
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
    if (userId) {
      axiosInstance
        .get(`Patients/GetPatientById/${userId}`)
        .then((response) => {
          setPatientData(response.data);
          notifySuccess("İlgili Hastanın verileri başarıyla getirildi!");
        })
        .catch((error) => {
          console.error("Hasta verileri alınamadı: ", error);
          setPatientData(null);
          notifyError("Hastanın verileri alınamadı!");
        });
    }
  }, [userId]);

  const handleDeletePatient = () => {
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
        axiosInstance
          .delete(`Patients/DeletePatient/${userId}`)
          .then(() => {
            notifySuccess("Hasta başarıyla silindi!");
            localStorage.clear();
            navigate("/");
          })
          .catch((error) => {
            console.error("Hasta silinemedi: ", error);
            notifyError("Hasta silinirken bir hata oluştu!");
          });
      }
    });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 min-h-screen py-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Hasta Kimlik Kartı
        </h1>

        {patientData ? (
          <div className="mt-8 rounded-lg overflow-hidden shadow-md bg-gray-50">
            <h2 className="text-xl font-bold mb-4 text-center py-2">
              Hasta Detayları
            </h2>
            <div className="p-4">
              <p>
                <strong>ID:</strong> {patientData.id}
              </p>
              <p>
                <strong>Ad:</strong> {patientData.name}
              </p>
              <p>
                <strong>Soyad:</strong> {patientData.surname}
              </p>
              <p>
                <strong>E-posta:</strong> {patientData.email}
              </p>
              <p>
                <strong>Şifre:</strong> {patientData.password}
              </p>
              <p>
                <strong>Doğum Tarihi:</strong> {patientData.birthDate}
              </p>
              <p>
                <strong>Cinsiyet:</strong>
                {patientData.gender}
              </p>
              <p>
                <strong>Telefon:</strong> {patientData.phoneNumber}
              </p>
              <p>
                <strong>Adres:</strong> {patientData.address}
              </p>
              <div className="mt-4 text-center">
                <button
                  onClick={handleDeletePatient}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Hesabı Sil
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-8">
            <p>Hasta verileri yüklenemedi. Lütfen tekrar deneyin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetByIdPatient;
