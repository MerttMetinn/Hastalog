import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from '../../../../utils/AxiosInstance';

const GetByIdDoctor = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialId = queryParams.get('id') || '';

  const [formData, setFormData] = useState({
    id: initialId,
  });
  const [doctorData, setDoctorData] = useState(null);

  const notifySuccess = () =>
    toast.success("İlgili Doktorun verileri başarıyla getirildi !", {
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
    toast.error("Doktorun verileri alınamadı !", {
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
    if (initialId) {
      axiosInstance
        .get(`Doctors/GetDoctorById/${initialId}`)
        .then((response) => {
          setDoctorData(response.data);
          notifySuccess();
        })
        .catch((error) => {
          console.error("Doktor verileri alınamadı: ", error);
          notifyError();
        });
    }
  }, [initialId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .get(`Doctors/GetDoctorById/${formData.id}`)
      .then((response) => {
        setDoctorData(response.data);
        notifySuccess();
      })
      .catch((error) => {
        console.error("Doktor verileri alınamadı: ", error);
        setFormData({
          id: "",
        });
        setDoctorData(false);
        notifyError();
      });
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-6 pb-96">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          ID Bazlı Doktor Görüntüle
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
                placeholder="ID Bazlı Doktor Görüntüle"
                autoComplete="off"
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
        {doctorData && (
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
                <strong>Cinsiyet:</strong>{" "}
                {doctorData.gender ? "Erkek" : "Kadın"}
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
                <strong>Hastane Adı:</strong> {doctorData.hospitalName}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetByIdDoctor;
