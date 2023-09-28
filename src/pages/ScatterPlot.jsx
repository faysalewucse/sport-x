import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { gamesData } from "../data/data";
import ScatterplotListCard from "../Cards/ScatterplotListCard";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ScatterPlot = () => {
  const allData = gamesData.filter(game=> game.chart_type === "sctr").map((data) => {
    return { x: data.twx, y: data.awx, r: parseInt(data.cy_p / 25) };
  });

  const data = {
    datasets: [
      {
        label: "Blue dataset",
        data: allData,
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className="p-5">
      <Bubble options={options} data={data} />
      <div className="my-10">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-1/5"></th>
              <th className="w-1/4 text-center">Name(GS)</th>
              <th className="w-1/5 text-center">(Team)</th>
              <th className="w-3/5 text-center">(AWX, TWX)</th>
              <th className="w-4/5 text-center">(Cy_p)</th>
            </tr>
          </thead>

          {gamesData.filter(game=> game.chart_type === "sctr").map((data, index) => (
            <ScatterplotListCard key={data._id} data={data} index={index + 1} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ScatterPlot;
