/* eslint-disable react/prop-types */
import { citys } from "./constants";
import "./styles.css";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";
import { useState } from "react";
import moment from "moment";

const ReportCriteria = ({ setReportCriteria, reportCriteria }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: 1,
    label: "الرياض",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log(selectedDate);
  return (
    <div className="font-main mb-10">
      <div
        className="border-[1px] border-[#cacaca] p-3 pb-8 space-y-4"
        id="panel"
        dir="rtl"
      >
        <button className="close-button" data-toggle="panel">
          &times;
        </button>
        <p className="text-[2.5rem] ">خيارات اللوحة</p>
        <div className="row">
          <div className="flex items-center ">
            <div className="w-1/4 ">
              <label className="middle">المنطقة: </label>
            </div>
            <div className="w-1/4 ">
              <Dropdown
                onChange={(value) => {
                  setSelectedOption(value);
                }}
                options={citys}
                value={selectedOption}
              />
            </div>
          </div>
        </div>
        <div className="w-full row">
          <div className="w-full flex ">
            <div className=" w-1/4">
              <label className="middle">الفترة الزمنية: </label>
            </div>
            <div className="w-1/4">
              <DatePicker
                className="w-full p-1 border-2 border-[#cacaca]"
                selected={moment(selectedDate).format("YYYY-MM-DD")}
                setSelectedDate={(date) => setSelectedDate(date)}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid small-12 align-center columns text-[#a01a1a]">
            <button
              className="text-lg text-red-600 button bg-[#1779ba] text-white py-2" // Assuming that 'text-lg' is equivalent to 1.1rem font-size and red-600 is close to the color #a01a1a
              onClick={() =>
                setReportCriteria({
                  ...reportCriteria,
                  start_date: selectedDate,
                  city: selectedOption.label,
                  state: selectedOption.value,
                })
              }
            >
              <i className="fas fa-check"></i> تطبيق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportCriteria;
