import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notifyError = () =>
    toast.error("Hatalı email veya şifre !", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("Auths/Login", { email: email, password: password, userType: 1 })
      .then((response) => {
        localStorage.setItem("AccessToken", response.data.accessToken);
        navigate("/anasayfa/admin");
      })
      .catch((error) => {
        console.error("Giriş başarısız: ", error);
        notifyError();
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96 backdrop-filter backdrop-blur-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Girişi</h2>
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
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
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
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Şifrenizi giriniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
