import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientsTable from '../../../Tables/PatientsTable';

const GetAllPatients = () => {
  const [hastalar, setHastalar] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const notifySuccess = () =>
    toast.success("Hasta verileri başarıyla getirildi !", {
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

  const handleButtonClick = () => {
    setLoading(true);

    axios.get('https://localhost:7008/api/Patients/GetAllPatients')
      .then((response) => {
        setHastalar(response.data);
        notifySuccess();
      })
      .catch((error) => {
        console.error('Hasta verileri alınamadı: ', error);
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
          Tüm Hastaları Görüntüle
        </h1>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            disabled={loading}
          >
            {loading ? 'Yükleniyor...' : 'Getir'}
          </button>
          <ToastContainer />
        </div>
        <div className="mt-4">
          {hastalar.length > 0 ? (
            <PatientsTable hastalar={hastalar} />
          ) : (
            <p className="flex justify-center text-gray-500 py-8">Henüz hasta verisi yok.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAllPatients;
