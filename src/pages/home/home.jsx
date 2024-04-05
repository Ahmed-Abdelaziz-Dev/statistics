import { useState } from "react";
import ReportCriteria from "../../components/ReportCriteria/ReportCriteria";

const Home = () => {
  const [isShowReportCriteria, setIsShowReportCriteria] = useState(false);
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
                <span>منطقة تبوك للفترة الزمنية: يوم 04/01/2022</span>{" "}
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
        {isShowReportCriteria && <ReportCriteria />}
      </div>
    </>
  );
};
export default Home;
