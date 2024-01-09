import { RiHome3Line, RiStarFill } from "react-icons/ri";
import MixedChart from "./Home/MixedChart";
import { Link, useParams } from "react-router-dom";
import { Button, Dropdown, Radio, Select } from "antd";
import { useState } from "react";
import { useGameContext } from "../context/GameContext";
import { gamesFilter } from "../data/data";

const Statistics = () => {
  const { games } = useGameContext();

  const options = games?.filter(gamesFilter).map((game) => {
    return {
      key: game.id,
      value: game.sp_name,
      label: (
        <Link to={`/statistics/${game.id}`} className="flex justify-between">
          <p>{game.team}</p>
          <p>{game.sp_name}</p>
        </Link>
      ),
    };
  });

  const searchOptions = games?.map((game) => {
    return {
      key: game.id,
      value: game.sp_id,
      label: (
        <Link to={`/statistics/${game.id}`} className="flex justify-between">
          <p>{game.team}</p>
          <p>{game.sp_name}</p>
          <p>{game.sp_id}</p>
        </Link>
      ),
    };
  });

  const onSearchSelect = (value) => {
    console.log(`selected ${value}`);
  };

  const { id } = useParams();

  const data = games?.find((team) => team.id === id);

  console.log(games);

  const [selectedButton, setSelectedButton] = useState(1);
  const onChange = (e) => {
    setSelectedButton(e.target.value);
  };

  const getTeamsName = (data) => {
    let teams = "";
    if (data[2] != "x") teams += `${data[2]}`;
    if (data[3] != "x") teams += `, ${data[3]}`;
    if (data[4] != "x") teams += `, ${data[4]}`;

    return teams;
  };
  return (
    <div className="p-3 relative">
      <div className="my-5">
        <div className="flex items-center rounded-md gap-2 mb-5 bg-black/90 text-white p-1">
          <p className="w-fit">Today&apos;s Pitchers</p>
          <Dropdown
            className="flex-1"
            menu={{ items: options }}
            trigger={["click"]}
          >
            <Button
              type="btn"
              className="border border-gray-200 bg-white flex justify-between"
              style={{ width: "100%" }}
            >
              <p>{data.team}</p>
              <p>{data.sp_name}</p>
            </Button>
          </Dropdown>
        </div>

        <div className="flex items-center rounded-md gap-2 mb-5 bg-black/90 text-white p-1">
          <p className="">Search by ID</p>
          <Select
            showSearch
            placeholder="Enter ID"
            optionFilterProp="children"
            onChange={onSearchSelect}
            className="flex-1"
            filterOption={(input, option) =>
              option.value.toString().includes(input.toString())
            }
            options={searchOptions}
          />
        </div>
      </div>

      <div className="flex justify-end mb-5">
        <Radio.Group onChange={onChange} value={selectedButton}>
          <Radio value={1}>Doted Line</Radio>
          <Radio value={2}>Moving Avg Line</Radio>
        </Radio.Group>
      </div>

      <MixedChart
        x={data.x_arr.split(",")}
        y={data.y_arr.split(",")}
        barColor={data.bar_color}
        awx_arr={data.awx_arr}
        mov_avg_arr={data.mov_ave_arr}
        selectedButton={selectedButton}
      />

      <div className="">
        <h1 className="font-bold mb-3">Sp States</h1>
        <div className="border p-2 rounded-lg">
          <b>{data.sp_name}</b>
          <h1>Age: {data.age}</h1>
          <h1>Weight: {data.weight}</h1>
          <b>
            W/L Record: {data.wx_record} AWX: {data.awx}
          </b>
          <h1 className="font-semibold text-green-600">
            {data.sp_name} pitched for {data.Trade_data[1]}{" "}
            {data.Trade_data[1] > 1 ? `teams` : `team`} in 2023:{" "}
            {getTeamsName(data.Trade_data)}
          </h1>
        </div>
        <h1 className="font-bold my-3">Analytics</h1>
        <div className="border p-2 rounded-lg">
          <b className="flex items-center gap-3">
            <span className="w-3 h-3 bg-pink-800 rounded"></span>
            {data.A_1}
          </b>
          <b className="flex items-center gap-3 mt-2">
            <RiStarFill className="text-green-500" />
            {data.A_2}
          </b>
        </div>
        <h1 className="font-bold my-3">Blurb</h1>
        <div className="border p-2 rounded-lg">
          <p className="text-sm text-justify">{data.Blurb}</p>
        </div>
      </div>
      <Link to="/">
        <RiHome3Line className="bg-black text-white rounded-lg p-3 text-5xl fixed bottom-5 right-5" />
      </Link>
    </div>
  );
};

export default Statistics;
