import { RiHome3Line, RiStarFill } from "react-icons/ri";
import Chart from "./Home/Chart";
import { Link } from "react-router-dom";

const Statistics = () => {
  const data = {
    _id: "64ee0068d985a555ca97e4a8",
    gid: "23_06_23_bal_sdn_1",
    game_time: "10:30 PM",
    game_date: "10, June, 23",
    team: "BAL",
    sp_name: "J. Means",
    age: "32",
    weight: "220",
    wx_record: "12.2-9.8",
    A_1: "J. Means ranks #21 in AL",
    A_2: "Overall stuff ranks #17 for Left-hand pitchers",
    Blurb:
      "Ullamcorper ipsum feugiat placerat natoque consequat eu duis. Ultrices amet corper ipsum feugiat placerat natoque consequat eu duis. Ultrices",
    y_arr: "800,435,724",
    x_arr: "4/4,4/11,4/17",
  };

  return (
    <div className="p-3 relative">
      <Chart y={data.y_arr.split(",")} x={data.x_arr.split(",")} />
      <div className="">
        <h1 className="font-bold mb-3">Sp States</h1>
        <div className="border p-2 rounded-lg">
          <b>{data.sp_name}</b>
          <h1>Age: {data.age}</h1>
          <h1>Weight: {data.weight}</h1>
          <b>
            W/L Record: {data.wx_record} AWX: {data.awx}
          </b>
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
