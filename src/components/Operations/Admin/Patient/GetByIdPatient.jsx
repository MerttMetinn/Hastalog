import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const GetByIdPatient = () => {
  const [formData, setFormData] = useState({
    id: "",
  });
  const [patientData, setPatientData] = useState(null);

  const notifySuccess = () =>
    toast.success("İlgili Hastanın verileri başarıyla getirildi !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("Hasta verileri alınamadı !", {
      position: "top-right",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://localhost:7008/api/Patients/GetPatientById/${formData.id}`)
      .then((response) => {
        setPatientData(response.data);
        notifySuccess();
      })
      .catch((error) => {
        console.error("Hasta verileri alınamadı: ", error);
        setFormData({
          id: "",
        });
        setPatientData(false);
        notifyError();
      });
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-6 pb-96">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          ID Bazlı Hasta Görüntüle
        </h1>
        <form onSubmit={handleSubmit}>
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
                className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                required
                placeholder="ID Bazlı Hasta Görüntüle"
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
            <ToastContainer />
          </div>
        </form>
        {/* Display patient data in a card-like structure */}
        {patientData && (
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
                <strong>Cinsiyet:</strong>{" "}
                {patientData.gender ? "Erkek" : "Kadın"}
              </p>
              <p>
                <strong>Telefon:</strong> {patientData.phoneNumber}
              </p>
              <p>
                <strong>Adres:</strong> {patientData.address}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetByIdPatient;
