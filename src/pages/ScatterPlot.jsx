import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { gamesData } from "../data/data";
import { Button, Radio, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      min: 0.5,
      max: 0.7,
    },
  },
};

const ScatterPlot = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(1);

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "violet",
    "indigo",
    "gold",
    "silver",
    "black",
  ];

  const [selectedValue, setSelectedValue] = useState("AL_yes");
  const onChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const allData = gamesData
    .map((data, i) => {
      if (selectedValue !== "all" && data.sctr_arr[0] !== selectedValue) {
        return null;
      }

      return {
        label: [data.sp_name],
        backgroundColorOpacity: 0.5,
        backgroundColor:
          selectedValue !== "all"
            ? data.sctr_arr[1] === 1
              ? "rgba(255, 0, 0, 0.5)"
              : data.sctr_arr[1] === 2
              ? "rgba(3, 138, 255, 0.5)"
              : data.sctr_arr[1] === 3
              ? "rgba(46, 204, 113, 0.5)"
              : "gray"
            : i < index * 10 && i >= (index - 1) * 10
            ? colors[index - 1]
            : "gray",
        data: [
          {
            x: data.twx,
            y: data.awx,
            r:
              data.sctr_arr[1] === 1 && selectedValue !== "all"
                ? parseInt(data.cy_p / 15) * 2
                : data.sctr_arr[1] === 2 && selectedValue !== "all"
                ? parseInt(data.cy_p / 15) * 1.67
                : data.sctr_arr[1] === 3 && selectedValue !== "all"
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

  const tableData = gamesData

    .map((data, index) => {
      if (selectedValue !== "all" && data.sctr_arr[0] !== selectedValue) {
        return null;
      }

      return {
        id: data._id["$oid"],
        serial: index + 1,
        name: data.sp_name,
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

  return (
    <div className="p-5">
      <Radio.Group className="mb-5" onChange={onChange} value={selectedValue}>
        <Radio value="AL_yes">SCTR_AL</Radio>
        <Radio value="NL_yes">SCTR_NL</Radio>
        <Radio value="all">All Pitchers</Radio>
      </Radio.Group>
      {/* Scatter Plot */}
      <Bubble options={options} data={data} />

      {/* Pagination Arrow */}
      {selectedValue === "all" && (
        <div className="flex justify-center gap-10 my-10">
          <Button
            size="large"
            onClick={() => setIndex(index - 1)}
            disabled={index === 1}
            className={`flex items-center gap-2`}
          >
            <BsChevronLeft /> Lower 10
          </Button>
          <Button
            size="large"
            onClick={() => setIndex(index + 1)}
            disabled={index === Math.ceil(gamesData.length / 10)}
            className="flex items-center gap-2"
          >
            <BsChevronRight />
            Higher 10
          </Button>
        </div>
      )}
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
              navigate(`/statistics/${record.id}`);
            },
          };
        }}
      />
    </div>
  );
};

export default ScatterPlot;
