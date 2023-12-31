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
import { useGameContext } from "../../context/GameContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Teams = () => {
  const { games } = useGameContext();

  const teamsData = games?.filter((game) => game.team === game.sp_name);
  const [selectedTeam, setSelectedTeam] = useState(
    localStorage.getItem("selectedTeam") || 0
  );

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        min: 40,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        font: {
          size: 20,
        },
        display: true,
        color: "black",

        text: teamsData[selectedTeam].gid,
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
      <div>
        <h1 className="text-xl font-bold">
          Teams : {teamsData[selectedTeam].team}
        </h1>
        <Team
          category={"AL East"}
          setSelectedTeam={setSelectedTeam}
          startIndex={0}
          endIndex={5}
        />
        <Team
          category={"AL Central"}
          setSelectedTeam={setSelectedTeam}
          startIndex={5}
          endIndex={10}
        />
        <Team
          category={"AL West"}
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
          category={"NL Central"}
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
      {/* <Collapse size="large" accordion items={items} /> */}
      <Bar
        title={teamsData[selectedTeam].gid}
        className="my-10"
        options={options}
        data={data}
      />
      <TeamStates teamsData={teamsData} selectedTeam={selectedTeam} />
      <ListedPlayers lastNames={teamsData[selectedTeam].y_arr.split(",")} />
    </div>
  );
};

export default Teams;

const Team = ({ category, setSelectedTeam, startIndex, endIndex }) => {
  const { games } = useGameContext();

  console.log(games);

  const teamsData = games?.filter((game) => game.team === game.sp_name);

  return (
    <p className="font-semibold text-lg flex gap-2">
      <p className="">{category} : </p>
      {teamsData?.slice(startIndex, endIndex).map((game, index) => (
        <p
          className="cursor-pointer underline"
          onClick={() => {
            setSelectedTeam(startIndex + index);
            localStorage.setItem("selectedTeam", startIndex + index);
          }}
          key={game.id}
        >
          {game.team}
          {index < 4 && ","}
        </p>
      ))}
    </p>
  );
};
