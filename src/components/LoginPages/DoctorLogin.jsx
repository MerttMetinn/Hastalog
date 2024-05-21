import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notifyError = () =>
    toast.error("Hatalı email veya şifre !", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("Auths/Login", { email: email, password: password, userType: 2 })
      .then((response) => {
        localStorage.setItem("AccessToken", response.data.accessToken);
        localStorage.setItem("UserId", response.data.id);
        navigate("/anasayfa/doktor");
      })
      .catch((error) => {
        console.error("Giriş başarısız: ", error);
        notifyError();
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full backdrop-filter backdrop-blur-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Doktor Girişi
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Email adresinizi giriniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Şifre
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder="Şifrenizi giriniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 w-full"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoctorLogin;
