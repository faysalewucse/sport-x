import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { Radio, Select, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../context/GameContext";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterPlot = () => {
  const navigate = useNavigate();

  const { games } = useGameContext();

  const [selectedValue, setSelectedValue] = useState("AL_yes");
  const [selectedSeason, setSelectedSeason] = useState("sctr_arr_24");

  const onChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const allData = games
    .map((data, i) => {
      if (
        selectedValue !== "all" &&
        data[selectedSeason][0] !== selectedValue
      ) {
        return null;
      }

      return {
        label: [data.sp_name],
        backgroundColorOpacity: 0.5,
        backgroundColor:
          selectedValue !== "all"
            ? data[selectedSeason][1] === 1
              ? "rgba(255, 0, 0, 0.5)"
              : data[selectedSeason][1] === 2
              ? "rgba(3, 138, 255, 0.5)"
              : data[selectedSeason][1] === 3
              ? "rgba(46, 204, 113, 0.5)"
              : "gray"
            : i >= 0 && i <= 19
            ? "black"
            : i >= 20 && i <= 39
            ? "red"
            : i >= 40 && i <= 59
            ? "blue"
            : "green",
        data: [
          {
            x: data.twx,
            y: data.awx,
            r:
              data[selectedSeason][1] === 1 && selectedValue !== "all"
                ? parseInt(data.cy_p / 15) * 2
                : data[selectedSeason][1] === 2 && selectedValue !== "all"
                ? parseInt(data.cy_p / 15) * 1.67
                : data[selectedSeason][1] === 3 && selectedValue !== "all"
                ? parseInt(data.cy_p / 15) * 1.33
                : parseInt(data.cy_p / 15),
          },
        ],
      };
    })
    .filter((data) => data !== null);

  const data = {
    labels: "Player Data",
    datasets: allData,
  };

  const getSctr = () => {
    return selectedSeason === "sctr_arr_23" ? "23_Y" : "24_Y";
  };

  const getSeason = () => {
    return selectedSeason === "sctr_arr_23" ? 2023 : 2024;
  };

  console.log(selectedSeason);

  const tableData = games
    .filter((game) => game.sctr_y === getSctr() && game.sea === getSeason())
    .sort((a, b) =>
      selectedValue === "all"
        ? a[selectedSeason][3] - b[selectedSeason][3]
        : a[selectedSeason][1] - b[selectedSeason][1]
    )
    .map((data, i) => {
      console.log(data[selectedSeason]);
      if (
        selectedValue !== "all" &&
        data[selectedSeason][0] !== selectedValue
      ) {
        return null;
      }

      return {
        sp_id2: data.sp_id2,
        serial:
          selectedValue === "all"
            ? data[selectedSeason][3]
            : data[selectedSeason][1],
        name: (
          <div
            className={`${
              selectedValue === "all"
                ? i >= 0 && i <= 19
                  ? "text-black"
                  : i >= 20 && i <= 39
                  ? "text-red-500"
                  : i >= 40 && i <= 59
                  ? "text-blue-500"
                  : "text-green-500"
                : "text-black"
            }`}
          >
            {data.sp_name}
          </div>
        ),
        team: data.team,
        awx_twx: `${data.awx}, ${data.twx}`,
        cy_p: data.cy_p,
      };
    })
    .filter((game) => game !== null);

  const columns = [
    {
      title: "#",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Name(GS)",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "AWX, TWX",
      dataIndex: "awx_twx",
      key: "awx_twx",
    },
    {
      title: "Cy_p",
      dataIndex: "cy_p",
      key: "cy_p",
    },
  ];

  const options = {
    plugins: {
      legend: {
        display: selectedValue !== "all",
      },
    },
    scales: {
      y: {
        min: 0.5,
        max: 0.7,
      },
    },
  };

  const handleSeason = (value) => {
    setSelectedSeason(value);
  };

  return (
    <div className="p-5">
      <Select
        className="mr-5"
        defaultValue="sctr_arr_24"
        style={{ width: 120 }}
        onChange={handleSeason}
        options={[
          { value: "sctr_arr_24", label: "2024" },
          { value: "sctr_arr_23", label: "2023" },
        ]}
      />
      <Radio.Group className="my-5" onChange={onChange} value={selectedValue}>
        <Radio value="AL_yes">SCTR_AL</Radio>
        <Radio value="NL_yes">SCTR_NL</Radio>
        <Radio value="all">All Pitchers</Radio>
      </Radio.Group>

      {/* Scatter Plot */}
      <Bubble options={options} data={data} />

      {/* Table */}
      <Table
        size="small"
        className="my-10"
        dataSource={tableData}
        columns={columns}
        pagination={false}
        rowClassName="cursor-pointer"
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/statistics/${record.sp_id2}`);
            },
          };
        }}
      />
    </div>
  );
};

export default ScatterPlot;
