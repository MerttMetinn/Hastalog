import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/AxiosInstance";
import Swal from "sweetalert2";

const DeleteAppointment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialId = queryParams.get('id') || '';

  const [formData, setFormData] = useState({
    appointmentId: initialId,
  });

  const notify = () =>
    toast.success("Randevu başarıyla silindi!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Swal.fire({
        title: "Randevu Silme",
        text: "Randevuyu silmek istediğinizden emin misiniz?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Evet, sil",
        cancelButtonText: "İptal",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosInstance.delete(
            `Appointments/DeleteAppointment/${formData.appointmentId}`
          );
          notify();
          setFormData({
            appointmentId: "",
          });
        }
      });
    } catch (error) {
      console.error("Error deleting Appointment:", error);
      toast.error("Randevu silinirken bir hata oluştu!");
    }
  };

  useEffect(() => {
    if (initialId) {
      setFormData({ appointmentId: initialId });
    }
  }, [initialId]);

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 min-h-screen py-6">
      <form
        className="w-full max-w-3xl h-fit isolate bg-white/20 shadow-lg ring-1 ring-black/5 rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Randevu Silme
        </h1>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="appointmentId"
              className="block text-sm font-medium text-gray-700"
            >
              Randevu ID
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="appointmentId"
              name="appointmentId"
              value={formData.appointmentId}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Silinecek Randevunun Id'si"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteAppointment;
