/* eslint-disable react/prop-types */
import Select from "react-select";

const Dropdown = ({ value, onChange, options }) => {
  return <Select onChange={onChange} options={options} value={value} />;
};
export default Dropdown;
