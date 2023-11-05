import { Collapse } from "antd";
import { gamesData } from "../../data/data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import TeamStates from "./TeamStates";
import ListedPlayers from "./ListedPlayers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const teamsData = gamesData.filter((game) => game.team === game.sp_name);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Horizontal Bar Chart",
    },
    layout: {
      padding: 5,
    },
    datalabels: {
      font: {
        weight: "bold",
      },
      align: "end",
      anchor: "end",
      formatter: function (value, context) {
        return context.chart.formattedData[context.dataIndex];
      },
    },
  },
};

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState(0);

  const items = [
    {
      key: "1",
      label: <p className="text-lg">Teams</p>,
      children: (
        <div>
          <Team
            category={"Al East"}
            setSelectedTeam={setSelectedTeam}
            startIndex={0}
            endIndex={5}
          />
          <Team
            category={"Al Central"}
            setSelectedTeam={setSelectedTeam}
            startIndex={5}
            endIndex={10}
          />
          <Team
            category={"Al West"}
            setSelectedTeam={setSelectedTeam}
            startIndex={10}
            endIndex={15}
          />
          <Team
            category={"NL East"}
            setSelectedTeam={setSelectedTeam}
            startIndex={15}
            endIndex={20}
          />

          <Team
            category={"NL West"}
            setSelectedTeam={setSelectedTeam}
            startIndex={20}
            endIndex={25}
          />
          <Team
            category={"NL West"}
            setSelectedTeam={setSelectedTeam}
            startIndex={25}
            endIndex={30}
          />
        </div>
      ),
    },
  ];

  const data = {
    labels: teamsData[selectedTeam].y_arr.split(","),
    datasets: [
      {
        data: teamsData[selectedTeam].x_arr.split(","),
        backgroundColor: ["gray"],
      },
    ],
  };

  return (
    <div className="p-5">
      <Collapse size="large" accordion items={items} />
      <Bar className="my-10" options={options} data={data} />
      <TeamStates teamsData={teamsData} selectedTeam={selectedTeam} />
      <ListedPlayers lastNames={teamsData[selectedTeam].y_arr.split(",")} />
    </div>
  );
};

export default Teams;

const Team = ({ category, setSelectedTeam, startIndex, endIndex }) => (
  <p className="font-semibold text-lg flex gap-2">
    <p className="">{category} : </p>
    {teamsData.slice(startIndex, endIndex).map((game, index) => (
      <p
        className="cursor-pointer underline"
        onClick={() => setSelectedTeam(startIndex + index)}
        key={game._id["$oid"]}
      >
        {game.team}
        {index < 4 && ","}
      </p>
    ))}
  </p>
);
