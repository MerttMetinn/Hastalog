import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/AxiosInstance";

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const notify = () =>
    toast.success("Admin Başarıyla eklendi!", {
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
      await axiosInstance.post("Admins/AddAdmin", formData);
      notify();
      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error adding Admin:", error);
      toast.error("Admin eklenirken bir hata oluştu!");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen py-6">
      <form
        className="w-full max-w-3xl h-fit isolate bg-white/20 shadow-lg ring-1 ring-black/5 rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Admin Kaydı
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
              className="mt-1 p-2 border border-gray-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white bg-opacity-50 placeholder-gray-500"
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
              className="mt-1 p-2 border border-gray-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white bg-opacity-50 placeholder-gray-500"
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
              className="mt-1 p-2 border border-gray-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white bg-opacity-50 placeholder-gray-500"
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
              className="mt-1 p-2 border border-gray-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white bg-opacity-50 placeholder-gray-500"
              required
              placeholder="Şifre"
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

export default AddAdmin;
