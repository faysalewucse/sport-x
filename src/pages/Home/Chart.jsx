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

const labels = ["Red", "Blue", "Green", "Yellow", "Pink"];

const data = {
  labels,
  datasets: [
    {
      label: "Data",
      data: labels.map((label) => label.length * 100),
      backgroundColor: labels.map((label) => label.toLowerCase()),
    },
  ],
};

const Chart = () => {
  return <Bar className="my-5" options={options} data={data} />;
};

export default Chart;
