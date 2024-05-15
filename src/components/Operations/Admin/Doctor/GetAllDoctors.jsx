import React from "react";
import axiosInstance from "../../../../utils/AxiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoctorsTable from "../../../Tables/DoctorsTable";

const GetAllDoctors = () => {
  const [doktorlar, setDoktorlar] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const notifySuccess = () =>
    toast.success("Doktor verileri başarıyla getirildi !", {
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
    toast.error("Doktor verileri alınamadı !", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleButtonClick = () => {
    setLoading(true);
    axiosInstance
      .get("Doctors/GetAllDoctors")
      .then((response) => {
        setDoktorlar(response.data);
        notifySuccess();
      })
      .catch((error) => {
        console.error("Doktor verileri alınamadı: ", error);
        notifyError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-6 pb-96">
      <div className="w-full max-w-fit bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Tüm Doktorları Görüntüle
        </h1>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            disabled={loading}
          >
            {loading ? "Yükleniyor..." : "Getir"}
          </button>
        </div>
        <div className="mt-4">
          {doktorlar.length > 0 ? (
            <DoctorsTable doktorlar={doktorlar} />
          ) : (
            <p className="flex justify-center text-gray-500 py-8">
              Henüz doktor verisi yok.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAllDoctors;
