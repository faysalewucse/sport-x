import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { gamesData } from "../data/data";
import { Radio, Select, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const itemsPerPage = 20; // Number of items per page

  const [selectedValue, setSelectedValue] = useState("AL_yes");
  const [selectedCategory, setSelectedCategory] = useState("1");
  const onChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleChange = (category) => {
    setSelectedCategory(category);
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
            : i >= 0 && i <= 19
            ? "rgba(65, 105, 225, 1)"
            : i >= 20 && i <= 39
            ? "red"
            : i >= 40 && i <= 59
            ? "yellow"
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

  const selectedCategoryData = allData.slice(
    (selectedCategory - 1) * itemsPerPage,
    selectedCategory * itemsPerPage
  );

  const data = {
    labels: "Player Data",
    datasets:
      selectedValue === "all" ? selectedCategoryData : allData.slice(0, 20),
  };

  const tableData = gamesData

    .map((data, i) => {
      if (selectedValue !== "all" && data.sctr_arr[0] !== selectedValue) {
        return null;
      }

      return {
        id: data._id["$oid"],
        serial: selectedValue === "all" ? data.sctr_arr[3] : data.sctr_arr[1],
        name: (
          <div
            className={`${
              i >= 0 && i <= 19
                ? "text-blue-500"
                : i >= 20 && i <= 39
                ? "text-red-500"
                : i >= 40 && i <= 59
                ? "text-yellow-500"
                : "text-gray-500"
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

  const categories = [
    {
      value: "1",
      label: "Cy Young Worthy",
    },
    {
      value: "2",
      label: "ALL-Star",
    },
    {
      value: "3",
      label: "Num 2 Starter",
    },
    {
      value: "4",
      label: "Num 3 Starter",
    },
  ];

  return (
    <div className="p-5">
      <Radio.Group className="mb-5" onChange={onChange} value={selectedValue}>
        <Radio value="AL_yes">SCTR_AL</Radio>
        <Radio value="NL_yes">SCTR_NL</Radio>
        <Radio value="all">All Pitchers</Radio>
      </Radio.Group>
      {selectedValue === "all" && (
        <Select
          defaultValue="1"
          className="w-40"
          onChange={handleChange}
          options={categories}
        />
      )}
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
