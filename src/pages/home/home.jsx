import { useEffect, useState } from "react";
import moment from "moment";
import { statisticsEndpoints } from "../../api/statistics";
import ReportCriteria from "../../components/ReportCriteria/ReportCriteria";
import BarChart from "../../components/BarChart/BarChart";
import useGetBarCharData from "../../hooks/useGetBarCharData";
import axios from "../../api/axios-instance";

const Home = () => {
  const [isShowReportCriteria, setIsShowReportCriteria] = useState(false);
  const [reportCriteria, setReportCriteria] = useState({
    start_date: new Date(),
    city: "الرياض",
    state: 0,
    calendar: "gregorian",
    key: "aqarsas_frontend",
  });
  const [chartData, setChartData] = useState([]);
  const { data } = useGetBarCharData(reportCriteria);
  useEffect(() => {
    const previousYears = [];
    for (let i = 1; i < 8; i++) {
      previousYears.push(
        moment(reportCriteria.start_date)
          .subtract(i, "years")
          .format("YYYY-MM-DD")
      );
    }

    const fetchData = async () => {
      console.log(previousYears);
      try {
        const promises = previousYears.flatMap((year) => [
          axios.post(statisticsEndpoints.allStats, {
            ...reportCriteria,
            stat_type: "number_of_deals",
            start_date: year,
          }),
          axios.post(statisticsEndpoints.allStats, {
            ...reportCriteria,
            stat_type: "value_of_deals",
            start_date: year,
          }),
        ]);
        const responses = await Promise.all(promises);
        const groupedByDate = responses.reduce((acc, { data }, index) => {
          const dateKey = previousYears[Math.floor(index / 2)];
          const statType =
            index % 2 === 0 ? "number_of_deals" : "value_of_deals";
          if (!acc[dateKey]) {
            acc[dateKey] = {
              start_date: dateKey,
              Stats_list: [],
              stat_type: {},
            };
          }
          acc[dateKey].stat_type[statType] = data.Stats_list; //

          return acc;
        }, {});

        setChartData(groupedByDate);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [reportCriteria]);

  return (
    <>
      <div className="font-main p-5" dir="rtl">
        <div className="row">
          <h1 className="text-[3rem]">رسم بياني تفاعلي</h1>
        </div>

        <div className="border-[1px] border-[#cacaca] bg-[#eaeaea] p-2 w-1/2 mb-5">
          <div className="">
            <div className="flex items-center">
              <p className="text-sm font-normal">
                <b>
                  <i className="fas fa-sliders-h text-lg text-gray-900"></i>
                </b>
                <span>خيارات البحث:</span>
                <span>
                  {" "}
                  منطقة {reportCriteria.city} للفترة الزمنية: يوم{" "}
                  {moment(reportCriteria.start_date).format("YYYY-MM-DD")}
                </span>
                <button
                  type="button"
                  className="button text-sm m-0 bg-[#1779ba] text-white p-2"
                  onClick={() => setIsShowReportCriteria(!isShowReportCriteria)}
                >
                  <i className="fas fa-sliders-h"></i> تغيير
                </button>
              </p>
            </div>
          </div>
        </div>

        {isShowReportCriteria && (
          <ReportCriteria
            setReportCriteria={setReportCriteria}
            reportCriteria={reportCriteria}
          />
        )}
        <BarChart chartData={chartData.length === 0 ? data : chartData} />
      </div>
    </>
  );
};

export default Home;
