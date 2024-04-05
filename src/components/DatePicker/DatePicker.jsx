/* eslint-disable react/prop-types */
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
registerLocale("es", es);

const DatePicker = ({ selectedDate, setSelectedDate, className }) => {
  return (
    <ReactDatePicker
      className="w-full p-1 border-2 border-[#cacaca]"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
  );
};
export default DatePicker;