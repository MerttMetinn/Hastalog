import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import Axios

const AddPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    birthDate: "",
    gender: true,
    phoneNumber: "",
    address: "",
  });

  const notify = () =>
    toast.success("Hasta Başarıyla eklendi!", {
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

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      // Send POST request using Axios
      await axios.post("https://localhost:7008/api/Patients/AddPatient", formData);
      notify();
      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
        birthDate: "",
        gender: true,
        phoneNumber: "",
        address: "",
      });
    } catch (error) {
      console.error("Error adding patient:", error);
      // Handle error and show appropriate toast message
      toast.error("Hasta eklenirken bir hata oluştu!");
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-6">
      <form
        className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Hasta Kaydı
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
            >
              <option value={true}>Erkek</option>
              <option value={false}>Kadın</option>
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
            />
          </div>
          <div className="w-full px-4 mb-4">
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
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
