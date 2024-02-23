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
import { Select } from "antd";

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

  const [selectedSeason, setSelectedSeason] = useState(2024);

  const teamsData = games?.filter(
    (game) => game.team === game.sp_name && game.sea === selectedSeason
  );

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
        min: 0,
        max: 120,
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
        text: teamsData[selectedTeam]?.gid,
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
    labels: teamsData[selectedTeam]?.y_arr.split(","),
    datasets: [
      {
        data: teamsData[selectedTeam]?.x_arr.split(","),
        backgroundColor: teamsData[selectedTeam]?.mov_ave_arr
          .split(",")
          .map((char) =>
            char === "r" ? "red" : char === "g" ? "green" : "grey"
          ),
      },
    ],
  };

  const handleSeason = (value) => {
    setSelectedSeason(value);
  };

  return (
    <div className="p-5">
      <div>
        <h6 className="text-sm font-semibold mb-1">Select Season</h6>
        <Select
          className="mb-3"
          defaultValue="2024"
          style={{ width: 120 }}
          onChange={handleSeason}
          options={[
            { value: 2024, label: "2024" },
            { value: 2023, label: "2023" },
          ]}
        />
        <h1 className="text-xl font-bold">
          Teams : {teamsData[selectedTeam].team}
        </h1>
        <Team
          teamsData={teamsData.slice(0, 5)}
          category={"AL East"}
          setSelectedTeam={setSelectedTeam}
          startIndex={0}
        />
        <Team
          teamsData={teamsData.slice(5, 10)}
          category={"AL Central"}
          setSelectedTeam={setSelectedTeam}
          startIndex={5}
        />
        <Team
          teamsData={teamsData.slice(10, 15)}
          category={"AL West"}
          setSelectedTeam={setSelectedTeam}
          startIndex={10}
        />
        <Team
          teamsData={teamsData.slice(15, 20)}
          category={"NL East"}
          setSelectedTeam={setSelectedTeam}
          startIndex={15}
        />

        <Team
          teamsData={teamsData.slice(20, 25)}
          category={"NL Central"}
          setSelectedTeam={setSelectedTeam}
          startIndex={20}
        />
        <Team
          teamsData={teamsData.slice(25, 30)}
          category={"NL West"}
          setSelectedTeam={setSelectedTeam}
          startIndex={25}
        />
      </div>
      {/* <Collapse size="large" accordion items={items} /> */}
      <Bar
        title={teamsData[selectedTeam]?.gid}
        className="my-10"
        options={options}
        data={data}
      />
      <TeamStates teamsData={teamsData} selectedTeam={selectedTeam} />
      <ListedPlayers
        selectedTeam={teamsData[selectedTeam]?.team}
        lastNames={teamsData[selectedTeam].y_arr.split(",")}
      />
    </div>
  );
};

export default Teams;

const Team = ({ teamsData, category, setSelectedTeam, startIndex }) => {
  return (
    <p className="font-semibold text-lg flex gap-2">
      <p className="">{category} : </p>
      {teamsData?.map((game, index) => (
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
