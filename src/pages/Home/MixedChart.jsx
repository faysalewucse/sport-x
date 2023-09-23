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

function MixedChart({ x, y, awx }) {
  const labels = x;

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "gray",
        borderWidth: 2,
        backgroundColor: "gray",
        fill: {
          target: "origin",
          above: "rgba(145, 145, 145, 0.4)",
        },
        data: [awx, awx, awx],
      },
      {
        type: "bar",
        label: "Data",
        data: y,
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  };
  return <Chart options={options} type="bar" data={data} />;
}

export default MixedChart;
