import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/AxiosInstance";
import Swal from "sweetalert2";

const DeleteMedicalReport = () => {
  const [formData, setFormData] = useState({
    reportId: "",
  });

  const notify = () =>
    toast.success("Tıbbi Rapor başarıyla silindi!", {
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
        title: 'Tıbbi Rapor Silme',
        text: 'Raporu silmek istediğinizden emin misiniz?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet, sil',
        cancelButtonText: 'İptal',
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosInstance.delete(`MedicalReports/DeleteReport/${formData.reportId}`);
          notify();
          setFormData({
            reportId: "",
          });
        }
      });
    } catch (error) {
      console.error("Error deleting Medical Report:", error);
      toast.error("Rapor silinirken bir hata oluştu!");
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-6 pb-96">
      <form
        className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Tıbbi Rapor Silme
        </h1>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="reportId"
              className="block text-sm font-medium text-gray-700"
            >
              Rapor ID
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="reportId"
              name="reportId"
              value={formData.reportId}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Silinecek Raporun Id'si"
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

export default DeleteMedicalReport;