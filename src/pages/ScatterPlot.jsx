import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { gamesData } from "../data/data";
import { Radio, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      min: 0.55,
      max: 0.67,
    },
  },
};

const ScatterPlot = () => {
  const [selectedValue, setSelectedValue] = useState("sctr_NL");
  const onChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const allData = gamesData
    .filter((game) => game.chart_type === selectedValue)
    .map((data, index) => {
      return {
        label: [data.sp_name],
        backgroundColor:
          index === 0
            ? "blue"
            : index === 1
            ? "red"
            : index === 2
            ? "green"
            : "gray",
        data: [
          {
            x: data.twx,
            y: data.awx,
            r: parseInt(data.cy_p / 15),
          },
        ],
      };
    });

  const data = {
    labels: "Player Data",
    datasets: allData,
  };

  const tableData = gamesData
    .filter((game) => game.chart_type === selectedValue)
    .map((data, index) => {
      return {
        id: data._id["$oid"],
        serial: index + 1,
        name: data.sp_name,
        team: data.team,
        awx_twx: `${data.awx}, ${data.twx}`,
        cy_p: data.cy_p,
      };
    });

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

  const navigate = useNavigate();

  return (
    <div className="p-5">
      <Radio.Group className="mb-5" onChange={onChange} value={selectedValue}>
        <Radio value="sctr_NL">SCTR_NL</Radio>
        <Radio value="sctr_AL">SCTR_AL</Radio>
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
              navigate(`/statistics/${record.id}`);
            },
          };
        }}
      />
    </div>
  );
};

export default ScatterPlot;
