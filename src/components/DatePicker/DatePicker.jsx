/* eslint-disable react/prop-types */
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
registerLocale("es", es);

const DatePicker = ({ selected, setSelectedDate, className }) => {
  return (
    <ReactDatePicker
      className={className}
      selected={selected}
      onChange={setSelectedDate}
    />
  );
};
export default DatePicker;
