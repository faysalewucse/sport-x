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
  LineController,
  BarController
);

function MixedChart({ x, y, awx }) {
  const labels = x;
  const colors = ["red", "green", "blue", "pink", "yellow", "indigo", "violet"];

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 5,
        fill: false,
        data: [awx, awx, awx],
      },
      {
        type: "bar",
        label: "Data",
        data: y,
        backgroundColor: colors.map((color) => color),
      },
    ],
  };
  return <Chart type="bar" data={data} />;
}

export default MixedChart;
