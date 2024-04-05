/* eslint-disable react/prop-types */
import Select from "react-select";

const Dropdown = ({ defaultValue, onChange, options }) => {
  return (
    <Select defaultValue={defaultValue} onChange={onChange} options={options} />
  );
};
export default Dropdown;
