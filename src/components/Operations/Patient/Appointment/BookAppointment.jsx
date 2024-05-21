import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../../utils/AxiosInstance";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    appointmentDate: "",
    appointmentTime: "08:00",
    clinic: "",
    doctorFullName: "",
    hospitalName: "",
    doctorId: "",
  });

  const [doctors, setDoctors] = useState([]);

  const notifySuccess = () =>
    toast.success("Randevu başarıyla oluşturuldu!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (message = "Randevu oluşturulurken bir hata oluştu!") =>
    toast.error(message, {
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

  const handleHospitalChange = (e) => {
    setFormData({
      appointmentDate: "",
      appointmentTime: "08:00",
      clinic: "",
      doctorFullName: "",
      hospitalName: e.target.value,
      doctorId: "",
    });
    setDoctors([]);
  };

  const handleClinicChange = async (e) => {
    const clinic = e.target.value;
    setFormData((prevData) => ({ ...prevData, clinic, doctorFullName: "" }));
    try {
      const response = await axiosInstance.get(
        `Doctors/GetAllDoctorsBySpecializationArea?SpecializationArea=${clinic}&HospitalName=${formData.hospitalName}`
      );
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      notifyError(error.response?.data || "Doktorlar getirilemedi!");
    }
  };

  const handleDoctorChange = async (e) => {
    const doctorFullName = e.target.value;
    setFormData((prevData) => ({ ...prevData, doctorFullName }));
    const [name, surname] = doctorFullName.split(" ");

    try {
      const response = await axiosInstance.get(
        `Doctors/GetDoctorByFullName?name=${name}&surname=${surname}`
      );
      setFormData((prevData) => ({ ...prevData, doctorId: response.data.id }));
    } catch (error) {
      console.error("Error fetching doctor ID:", error);
      notifyError(error.response?.data || "Doktor bilgisi getirilemedi!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullAppointmentDate = `${formData.appointmentDate}T${formData.appointmentTime}`;
    const patientId = localStorage.getItem("UserId");
    const appointmentData = {
      date: fullAppointmentDate,
      hospitalName: formData.hospitalName,
      clinic: formData.clinic,
      patientId: patientId,
      doctorId: formData.doctorId,
    };

    try {
      await axiosInstance.post("Appointments/AddAppointment", appointmentData);
      notifySuccess();
      setFormData({
        appointmentDate: "",
        appointmentTime: "08:00",
        clinic: "",
        doctorFullName: "",
        hospitalName: "",
        doctorId: "",
      });
      setDoctors([]);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        notifyError(error.response.data);
      } else {
        console.error("Error booking appointment:", error);
        notifyError("Randevu oluşturulurken bir hata oluştu!");
      }
    }
  };

  const timeOptions = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeOptions.push(
      `${hour.toString().padStart(2, "0")}:00`,
      `${hour.toString().padStart(2, "0")}:30`
    );
  }

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const maxDate = new Date(today.setDate(today.getDate() + 14))
    .toISOString()
    .split("T")[0];

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 min-h-screen py-6">
      <form
        className="w-full max-w-3xl h-fit isolate bg-white/20 shadow-lg ring-1 ring-black/5 rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-4 text-center py-1">
          Randevu Oluştur
        </h1>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full px-4 mb-4 py-2">
            <label
              htmlFor="hospital"
              className="block text-sm font-medium text-gray-700"
            >
              Hastane Seçimi
              <span className="text-red-500"> (*)</span>
            </label>
            <select
              id="hospital"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleHospitalChange}
              className="mt-1 p-2 border border-blue-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 bg-opacity-50"
              required
            >
              <option value="" disabled>
                Hastane Seçiniz
              </option>
              <option value="Koç Hastanesi">Koç Hastanesi</option>
              <option value="Kocaeli Devlet Hastanesi">
                Kocaeli Devlet Hastanesi
              </option>
              <option value="Florence Nightingale Hastanesi">
                Florence Nightingale Hastanesi
              </option>
            </select>
          </div>
          <div className="w-full px-4 mb-4 py-2">
            <label
              htmlFor="clinic"
              className="block text-sm font-medium text-gray-700"
            >
              Klinik Seçimi
              <span className="text-red-500"> (*)</span>
            </label>
            <select
              id="clinic"
              name="clinic"
              value={formData.clinic}
              onChange={handleClinicChange}
              className="mt-1 p-2 border border-blue-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 bg-opacity-50"
              required
            >
              <option value="" disabled>
                Klinik Seçiniz
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
          <div className="w-full px-4 mb-4 py-2">
            <label
              htmlFor="doctorFullName"
              className="block text-sm font-medium text-gray-700"
            >
              Doktor Seçimi
              <span className="text-red-500"> (*)</span>
            </label>
            <select
              id="doctorFullName"
              name="doctorFullName"
              value={formData.doctorFullName}
              onChange={handleDoctorChange}
              className="mt-1 p-2 border border-blue-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 bg-opacity-50"
              required
            >
              <option value="" disabled>
                Doktor Seçiniz
              </option>
              {doctors.map((doctor) => (
                <option
                  key={doctor.id}
                  value={`${doctor.name} ${doctor.surname}`}
                >
                  {`${doctor.name} ${doctor.surname}`}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 py-2">
            <label
              htmlFor="appointmentDate"
              className="block text-sm font-medium text-gray-700"
            >
              Randevu Tarihi
              <span className="text-red-500"> (*)</span>
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="mt-1 p-2 border border-blue-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 bg-opacity-50"
              required
              min={minDate}
              max={maxDate}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 py-2">
            <label
              htmlFor="appointmentTime"
              className="block text-sm font-medium text-gray-700"
            >
              Randevu Saati
              <span className="text-red-500"> (*)</span>
            </label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              className="mt-1 p-2 border border-blue-500 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 bg-opacity-50"
              required
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Randevu Oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
