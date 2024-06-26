import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/AxiosInstance";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
    address: "",
    specializationArea: "",
    hospitalName: "",
  });

  const notify = () =>
    toast.success("Doktor başarıyla eklendi!", {
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
    const formattedData = {
      ...formData,
      gender: formData.gender === "true" ? true : false,
    };
    try {
      await axiosInstance.post("Doctors/AddDoctor", formattedData);
      notify();
      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
        birthDate: "",
        gender: "",
        phoneNumber: "",
        address: "",
        specializationArea: "",
        hospitalName: "",
      });
    } catch (error) {
      console.error("Error adding doctor:", error);
      toast.error("Doktor eklenirken bir hata oluştu!");
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-6">
      <form
        className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Doktor Kaydı
        </h1>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              İsim
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="İsim"
              autoComplete="off"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700"
            >
              Soyisim
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Soyisim"
              autoComplete="off"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-posta
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="E-posta"
              autoComplete="off"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Şifre
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Şifre"
              autoComplete="off"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700"
            >
              Doğum Tarihi
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Doğum Tarihi"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Cinsiyet
              <span className="text-red-500"> (*)</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="" disabled>
                Cinsiyet Seçiniz
              </option>
              <option value="true">Erkek</option>
              <option value="false">Kadın</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="specializationArea"
              className="block text-sm font-medium text-gray-700"
            >
              Uzmanlık Alanı
              <span className="text-red-500"> (*)</span>
            </label>
            <select
              id="specializationArea"
              name="specializationArea"
              value={formData.specializationArea}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="" disabled>
                Uzmanlık Alanı Seçiniz
              </option>
              <option value="Kardiyoloji">Kardiyoloji</option>
              <option value="Nöroloji">Nöroloji</option>
              <option value="Ortopedi">Ortopedi</option>
              <option value="Pediatri">Pediatri</option>
              <option value="Dermatoloji">Dermatoloji</option>
              <option value="Göz Hastalıkları">Göz Hastalıkları</option>
              <option value="Üroloji">Üroloji</option>
              <option value="Psikiyatri">Psikiyatri</option>
              <option value="Onkoloji">Onkoloji</option>
              <option value="Endokrinoloji">Endokrinoloji</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 py-2">
            <label
              htmlFor="hospitalName"
              className="block text-sm font-medium text-gray-700"
            >
              Hastane Adı
              <span className="text-red-500"> (*)</span>
            </label>
            <select
              id="hospitalName"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="" disabled>
                Hastane Seçiniz
              </option>
              <option value="Koç Hastanesi">Koç Hastanesi</option>
              <option value="Kocaeli Devlet Hastanesi">Kocaeli Devlet Hastanesi</option>
              <option value="Florence Nightingale Hastanesi">Florence Nightingale Hastanesi</option>
            </select>
          </div>
          <div className="w-full px-4 mb-4 py-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Telefon Numarası
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Telefon Numarası"
              autoComplete="off"
            />
          </div>
          <div className="w-full px-4 mb-4 py-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Adres
              <span className="text-red-500"> (*)</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Adres"
            ></textarea>
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

export default AddDoctor;
