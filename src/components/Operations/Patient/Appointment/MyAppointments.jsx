import { useState } from "react";
import axiosInstance from "../../../../utils/AxiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppointmentsTable from "../../../Tables/AppointmentsTable";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("UserId"); // localStorage'dan kullanıcı ID'sini al

  const notifySuccess = () =>
    toast.success("Randevular başarıyla getirildi!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("Randevular alınamadı!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleButtonClick = () => {
    setLoading(true);
    axiosInstance
      .get(`Appointments/GetAppointmentsByPatientId/patient/${userId}`)
      .then((response) => {
        setAppointments(response.data);
        notifySuccess();
      })
      .catch((error) => {
        console.error("Randevular alınamadı: ", error);
        notifyError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 min-h-screen py-6">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Randevularımı Görüntüle
        </h1>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Getir"}
          </button>
        </div>
        <div className="mt-4">
          {appointments.length > 0 ? (
            <AppointmentsTable randevularım={appointments} />
          ) : (
            <p className="flex justify-center text-gray-500 py-8">
              Henüz randevu verisi yok.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;