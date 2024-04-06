import { useState } from "react";
import ReportCriteria from "../../components/ReportCriteria/ReportCriteria";
import BarChart from "../../components/BarChart/BarChart";
import useGetBarCharData from "../../hooks/useGetBarCharData";
import moment from "moment";

const Home = () => {
  const [isShowReportCriteria, setIsShowReportCriteria] = useState(false);
  const [reportCriteria, setReportCriteria] = useState({
    start_date: moment(new Date()).format("YYYY-MM-DD"),
    city: "الكل",
    state: 2000,
  });
  const { data, isLoading, isError } = useGetBarCharData(reportCriteria);

  return (
    <>
      <div className=" font-main p-5" dir="rtl">
        <div className="row ">
          <h1 className="text-[3rem]">رسم بياني تفاعلي</h1>
        </div>

        <div className="border-[1px] border-[#cacaca] bg-[#eaeaea] p-2 w-1/2 mb-5">
          <div className="">
            <div className=" flex items-center ">
              <p className="text-sm font-normal">
                <b>
                  <i className="fas fa-sliders-h text-lg text-gray-900"></i>{" "}
                </b>{" "}
                <span>خيارات البحث:</span>
                <span>
                  منطقة {reportCriteria.city} للفترة الزمنية: يوم
                  {reportCriteria.start_date}
                </span>{" "}
                <button
                  type="button"
                  className=" button text-sm m-0 bg-[#1779ba] text-white p-2"
                  onClick={() => setIsShowReportCriteria(!isShowReportCriteria)}
                >
                  <i className="fas fa-sliders-h"></i> تغيير
                </button>
              </p>
            </div>
          </div>
        </div>
        {isShowReportCriteria && (
          <ReportCriteria setReportCriteria={setReportCriteria} />
        )}
        <BarChart data={data} />
      </div>
    </>
  );
};
export default Home;
