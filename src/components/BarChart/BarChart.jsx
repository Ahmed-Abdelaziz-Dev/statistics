/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ chartData }) => {
  if (!chartData) return null;

  const titlePlaceholder =
    "مقارنة عدد الصفقات بالفترة المماثلة من الأعوام الماضية";

  // Function to sum up stats by Dtype
  const sumByType = (data, type) => {
    return data.reduce(
      (sum, item) => (item.Dtype === type ? sum + item.Stat : sum),
      0
    );
  };

  // Construct the datasets
  const datasets = [
    {
      label: "سكني - Number of Deals",
      data: [],
      backgroundColor: "#2984c9",
    },
    {
      label: "تجاري - Number of Deals",
      data: [],
      backgroundColor: "#f8b358",
    },
  ];

  // Populate data arrays
  Object.keys(chartData).forEach((year) => {
    const yearData = chartData[year].stat_type;
    // eslint-disable-next-line react/prop-types
    datasets[0].data.push(sumByType(yearData.number_of_deals, "سكني"));
    datasets[1].data.push(sumByType(yearData.number_of_deals, "تجاري"));
  });

  // Setup the chart structure
  const chartDataStructure = {
    labels: Object.keys(chartData),
    datasets: datasets,
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: titlePlaceholder,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <>
      <Bar data={chartDataStructure} options={options} />
      <span>
        * عطلة نهاية الأسبوع والإجازات الرسمية يقل أو لا يتم فيها تسجيل الصفقات
      </span>
    </>
  );
};

export default BarChart;
