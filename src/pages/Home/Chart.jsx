import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  Title,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const Chart = ({ x, y }) => {
  const labels = x;

  const colors = ["red", "green", "blue", "pink", "yellow", "indigo", "violet"];

  const data = {
    labels,
    datasets: [
      {
        label: "Data",
        data: y,
        backgroundColor: colors.map((color) => color),
      },
    ],
  };

  return <Bar className="my-5" options={options} data={data} />;
};

export default Chart;
