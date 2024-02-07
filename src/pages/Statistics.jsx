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

  const [teamName, setTeamName] = useState(id.split("_")[1]);

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
      value: game.sp_name,
      label: (
        <Link
          onClick={() => setTeamName(game.team)}
          to={`/statistics/${game.sp_id2.split("_")[0]}_${game.team}`}
          className="flex justify-between"
        >
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

  const filterOption = (input, option) =>
    (option?.value ?? "")
      .toLowerCase()
      .split(" ")
      .pop()
      .includes(input.toLowerCase());

  const data = games?.find(
    (game) =>
      game.sp_id2.split("_")[0] === id.split("_")[0] && game.team == teamName
  );

  const data2 = games?.filter(
    (team) => team.sp_id2.split("_")[0] == id.split("_")[0]
  );

  // const allTeam = data2.map((d) => d.sp_id2.split("_")[2]);

  let allTeam = {};

  data2.forEach((game) => {
    const key = game.sea;
    if (!allTeam[key]) {
      allTeam[key] = [];
    }
    allTeam[key].push(game.team);
  });

  let click = "";

  const [selectedButton, setSelectedButton] = useState(1);
  const onChange = (e) => {
    setSelectedButton(e.target.value);
  };

  const getTeamsName = (data, teams) => {
    console.log(data);
    const clickableTeams = [];

    for (let i = 2; i <= 4; i++) {
      if (data[i] !== "x") {
        clickableTeams.push(
          <span
            onClick={() => setTeamName(data[i])}
            className="cursor-pointer text-black underline"
            key={data[i]}
          >
            {data[i]}
          </span>
        );
      }
    }

    click = teams.filter(
      (team) => team !== data[2] && team !== data[3] && team !== data[4]
    );

    return clickableTeams;
  };
  return loading ? (
    <CustomLoader />
  ) : (
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
              <p>{data?.team}</p>
              <p>{data?.sp_name}</p>
            </Button>
          </Dropdown>
        </div>

        <div className="flex items-center rounded-md gap-2 mb-5 bg-black/90 text-white p-1">
          <p className="">Search by L. Name</p>
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
        x={data?.x_arr.split(",")}
        y={data?.y_arr.split(",")}
        barColor={data?.bar_color}
        awx_arr={data?.awx_arr}
        mov_avg_arr={data?.mov_ave_arr}
        selectedButton={selectedButton}
      />

      <div className="">
        <h1 className="font-bold mb-3">Sp States</h1>
        <div className="border p-2 rounded-lg">
          <b>{data?.sp_name}</b>
          <h1>Age: {data?.age}</h1>
          <h1>Weight: {data?.weight}</h1>
          <b>
            W/L Record: {data?.wx_record} AWX: {data?.awx}
          </b>
          <div>
            {Object.keys(allTeam)
              .reverse()
              .map((key) => (
                <h1 key={key} className="font-semibold text-green-600">
                  {data?.sp_name} pitched for{" "}
                  <span className="text-black">{data?.Trade_data[1]} </span>
                  {data?.Trade_data[1] > 1 ? `teams` : `team`} in{" "}
                  <span className="text-indigo-600">{key}</span>:{" "}
                  {getTeamsName(data?.Trade_data, allTeam[key]).reduce(
                    (prev, curr) => [prev, ", ", curr]
                  )}
                  {". "}
                  For Total clicks{" "}
                  <span className="cursor-pointer underline text-black">
                    {click.map((teamName, index) => (
                      <span onClick={() => setTeamName(teamName)} key={index}>
                        {teamName} ,
                      </span>
                    ))}
                  </span>
                </h1>
              ))}
          </div>
        </div>
        <h1 className="font-bold my-3">Analytics</h1>
        <div className="border p-2 rounded-lg">
          <b className="flex items-center gap-3">
            <span className="w-3 h-3 bg-pink-800 rounded"></span>
            {data?.A_1}
          </b>
          <b className="flex items-center gap-3 mt-2">
            <RiStarFill className="text-green-500" />
            {data?.A_2}
          </b>
        </div>
        <h1 className="font-bold my-3">Blurb</h1>
        <div className="border p-2 rounded-lg">
          <p className="text-sm text-justify">{data?.Blurb}</p>
        </div>
      </div>
      <Link to="/">
        <RiHome3Line className="bg-black text-white rounded-lg p-3 text-5xl fixed bottom-5 right-5" />
      </Link>
    </div>
  );
};

export default Statistics;
