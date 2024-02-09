/* eslint-disable react-hooks/exhaustive-deps */
import { RiHome3Line, RiStarFill } from "react-icons/ri";
import MixedChart from "./Home/MixedChart";
import { Link, useParams } from "react-router-dom";
import { Button, Dropdown, Radio, Select } from "antd";
import { useEffect, useState } from "react";
import { gamesFilter } from "../data/data";
import axios from "axios";
import { baseUrl } from "../Constant";
import toast from "react-hot-toast";
import CustomLoader from "../components/CustomLoader";

const Statistics = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}/${id.split("_")[0]}`);
      setGames(data);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const chartData = games?.find(
    (game) =>
      game.sp_id2 === id &&
      game.team == id.split("_")[2] &&
      game.sea == `20${id.split("_")[1]}` // 2000 for 2024/2023
  );

  const options = games?.filter(gamesFilter).map((game) => {
    return {
      key: game.id,
      value: game.sp_name,
      label: (
        <Link
          to={`/statistics/${game.sp_id2}`}
          className="flex justify-between"
        >
          <p>{game.team}</p>
          <p>{game.sp_name}</p>
        </Link>
      ),
    };
  });

  const searchOptions = games?.map((game) => {
    return {
      key: game.id,
      value: game.sp_name,
      label: (
        <Link
          to={`/statistics/${game.sp_id2}`}
          className="flex justify-between"
        >
          <p>{game.team}</p>
          <p>{game.sp_name}</p>
          <p>{game.sp_id}</p>
          <p>{game.sea}</p>
        </Link>
      ),
    };
  });

  const onSearchSelect = (value) => {
    console.log(`selected ${value}`);
  };

  const filterOption = (input, option) =>
    (option?.value ?? "")
      .toLowerCase()
      .split(" ")
      .pop()
      .includes(input.toLowerCase());

  const allSeasonData = games?.filter(
    (game) => game.sp_id2.split("_")[0] == id.split("_")[0]
  );

  const [selectedButton, setSelectedButton] = useState(1);

  const onChange = (e) => {
    setSelectedButton(e.target.value);
  };

  return loading ? (
    <CustomLoader />
  ) : (
    <div className="p-3 relative">
      <div className="my-5">
        <p className="w-fit">Today&apos;s Pitchers</p>
        <div className="flex items-center rounded-md gap-2 mb-2 bg-black/90 text-white p-1">
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
              <p>{chartData?.team}</p>
              <p>{chartData?.sp_name}</p>
              <p>{chartData?.sea}</p>
            </Button>
          </Dropdown>
        </div>

        <p className="">Search by L. Name</p>
        <div className="flex items-center rounded-md gap-2 mb-5 bg-black/90 text-white p-1">
          <Select
            showSearch
            placeholder="Enter Last Name"
            optionFilterProp="children"
            onChange={onSearchSelect}
            className="flex-1"
            filterOption={filterOption}
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
        x={chartData?.x_arr.split(",")}
        y={chartData?.y_arr.split(",")}
        barColor={chartData?.bar_color}
        awx_arr={chartData?.awx_arr}
        mov_avg_arr={chartData?.mov_ave_arr}
        selectedButton={selectedButton}
      />

      <div className="">
        <h1 className="font-bold mb-3">Sp States</h1>
        <div className="border p-2 rounded-lg">
          <b>{chartData?.sp_name}</b>
          <h1>Age: {chartData?.age}</h1>
          <h1>Weight: {chartData?.weight}</h1>
          <b>
            W/L Record: {chartData?.wx_record} AWX: {chartData?.awx}
          </b>
          <SeasonData
            playerId={id.split("_")[0]}
            chartData={chartData}
            data={allSeasonData}
          />
        </div>
        <h1 className="font-bold my-3">Analytics</h1>
        <div className="border p-2 rounded-lg">
          <b className="flex items-center gap-3">
            <span className="w-3 h-3 bg-pink-800 rounded"></span>
            {chartData?.A_1}
          </b>
          <b className="flex items-center gap-3 mt-2">
            <RiStarFill className="text-green-500" />
            {chartData?.A_2}
          </b>
        </div>
        <h1 className="font-bold my-3">Blurb</h1>
        <div className="border p-2 rounded-lg">
          <p className="text-sm text-justify">{chartData?.Blurb}</p>
        </div>
      </div>
      <Link to="/">
        <RiHome3Line className="bg-black text-white rounded-lg p-3 text-5xl fixed bottom-5 right-5" />
      </Link>
    </div>
  );
};

export default Statistics;

const SeasonData = ({ playerId, chartData, data }) => {
  const filteredDataBySeason = {};

  data.forEach((obj) => {
    const season = obj.sea;
    const tradeData = obj.Trade_data.slice(2).filter((val) => val !== "x");

    if (!filteredDataBySeason[season]) {
      filteredDataBySeason[season] = [];
    }

    if (tradeData.length > 0 && filteredDataBySeason[season].length === 0) {
      filteredDataBySeason[season].push(...tradeData);
    }
  });

  let allTeam = {};

  data.forEach((game) => {
    const key = game.sea;
    if (!allTeam[key]) {
      allTeam[key] = [];
    }
    allTeam[key].push(game.team);
  });

  const getTeamsName = (season) => {
    const pitchedTeams = filteredDataBySeason[season].map(
      (teamName) => teamName
    );

    const forTotalClicksTeams = allTeam[season].filter(
      (team) => !pitchedTeams.includes(team)
    );

    return { pitchedTeams, forTotalClicksTeams };
  };

  return (
    <div>
      {Object.keys(filteredDataBySeason)
        .reverse()
        .map((season) => (
          <div key={season}>
            {chartData?.sp_name} pitched for{" "}
            <span className="text-black">{chartData?.Trade_data[1]} </span>
            {chartData?.Trade_data[1] > 1 ? `teams` : `team`} in{" "}
            <span className="text-green-600 font-semibold">{season}</span>:{" "}
            {getTeamsName(season).pitchedTeams.map((teamName, index) => (
              <Link
                to={`/statistics/${playerId}_${season.substring(
                  2
                )}_${teamName}`}
                key={index}
              >
                <span className="text-indigo-600 font-semibold cursor-pointer underline">
                  {teamName}
                </span>
                {index < filteredDataBySeason[season].length - 1 ? ", " : ""}
              </Link>
            ))}
            {getTeamsName(season).forTotalClicksTeams.length > 0 && (
              <span className="">
                {". "}For total clicks{" "}
                {getTeamsName(season).forTotalClicksTeams.map(
                  (teamName, index) => (
                    <Link
                      to={`/statistics/${playerId}_${season.substring(
                        2
                      )}_${teamName}`}
                      key={index}
                    >
                      <span className="cursor-pointer underline text-indigo-600 font-semibold">
                        {teamName}
                      </span>
                      {index <
                      getTeamsName(season).forTotalClicksTeams.length - 1
                        ? ", "
                        : ""}
                    </Link>
                  )
                )}
              </span>
            )}
          </div>
        ))}
    </div>
  );
};
