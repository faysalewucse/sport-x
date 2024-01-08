import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  Filler,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
);

const options = {
  responsive: true,
  tension: 0.3,
};

function MixedChart({ x, y, barColor, awx_arr, mov_avg_arr, selectedButton }) {
  const labels = x;

  const barColors = barColor
    .split(",")
    .map((color) => (color === "g" ? "green" : "red"));

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "gray",
        borderWidth: 2,
        fill: {
          target: "origin",
          above: "rgba(145, 145, 145, 0.4)",
        },
        borderDash: [5, 5],
        data:
          selectedButton === 1 ? awx_arr.split(",") : mov_avg_arr.split(","),
      },
      {
        type: "bar",
        label: "Data",
        data: y,
        borderColor: barColors,
        borderWidth: 2,
      },
    ],
  };
  return <Chart options={options} type="bar" data={data} />;
}

export default MixedChart;
