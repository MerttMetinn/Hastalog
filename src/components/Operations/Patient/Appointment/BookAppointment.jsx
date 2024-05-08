import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const BookAppointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default BookAppointment;
