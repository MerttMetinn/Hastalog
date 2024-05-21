import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/AxiosInstance";
import Swal from "sweetalert2";

const DeleteAdmin = () => {
  const [formData, setFormData] = useState({
    id: "",
  });
  const [searchParams] = useSearchParams();
  const adminId = searchParams.get("id");

  useEffect(() => {
    if (adminId) {
      setFormData({ id: adminId });
    }
  }, [adminId]);

  const notifySuccess = () =>
    toast.success("Admin başarıyla silindi!", {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await Swal.fire({
        title: "Admin Silme",
        text: "Admini silmek istediğinizden emin misiniz?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Evet, sil",
        cancelButtonText: "İptal",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await axiosInstance.delete(`Admins/DeleteAdmin/${formData.id}`);
        notifySuccess();
        setFormData({
          id: "",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data === "You are not allowed to delete your own admin account.") {
          notifyError("Kendi hesabınızı silemezsiniz!");
        } else {
          notifyError("Admin silinirken bir hata oluştu: " + error.response.data);
        }
      } else {
        console.error("Error deleting Admin:", error);
        notifyError("Admin silinirken bir hata oluştu!");
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen py-6">
      <form
        className="w-full max-w-3xl h-fit isolate bg-white/20 shadow-lg ring-1 ring-black/5 rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Admin Silme
        </h1>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              ID
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white bg-opacity-50 placeholder-gray-500"
              required
              placeholder="Silinecek Adminin Id'si"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteAdmin;
