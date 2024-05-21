import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/AxiosInstance";

const AddMedicalReport = () => {
  const [formData, setFormData] = useState({
    doctorId: "",
    patientId: "",
    reportContent: "",
    reportDate: "",
    imageUrl: "",
  });

  const notify = () =>
    toast.success("Tıbbi Rapor Başarıyla eklendi!", {
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
    console.log(formData);
    e.preventDefault();
    try {
      await axiosInstance.post("MedicalReports/AddReport", formData);
      notify();
      setFormData({
        doctorId: "",
        patientId: "",
        reportContent: "",
        reportDate: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error adding Medical Report:", error);
      toast.error("Rapor eklenirken bir hata oluştu!");
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-6">
      <form
        className="w-full max-w-3xl h-fit bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Tıbbi Rapor Ekle
        </h1>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="doctorId"
              className="block text-sm font-medium text-gray-700"
            >
              Doktor ID
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="doctorId"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Doktor ID"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="patientId"
              className="block text-sm font-medium text-gray-700"
            >
              Hasta ID
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Hasta ID"
            />
          </div>     
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="reportDate"
              className="block text-sm font-medium text-gray-700"
            >
              Rapor Tarihi
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="date"
              id="reportDate"
              name="reportDate"
              value={formData.reportDate}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Rapor Tarihi"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Resim URL
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Resim URL"
            />
          </div>
        <div className="w-full px-4 mb-4 py-2">
            <label
              htmlFor="reportContent"
              className="block text-sm font-medium text-gray-700"
            >
              Rapor İçeriği
              <span className="text-red-500"> (*)</span>
            </label>
            <textarea
              id="reportContent"
              name="reportContent"
              value={formData.reportContent}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Rapor İçeriği"
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

export default AddMedicalReport;
