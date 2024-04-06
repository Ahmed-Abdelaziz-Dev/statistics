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

const BarChart = () => {
  const data = {
    labels: [
      "04/01/2016",
      "04/01/2017",
      "04/01/2018",
      "04/01/2019",
      "04/01/2020",
      "04/01/2021",
      "04/01/2022",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: "#2984c9",
      },
      {
        label: "Dataset 2",
        data: [5, 10, 15, 20, 25, 30, 35],
        backgroundColor: "#f8b358",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: false,
        text: "Stacked Bar Chart",
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
        ticks: {
          maxRotation: 45,
          minRotation: 45,

          font: {
            style: "italic",
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
