import { RiHome3Line, RiStarFill } from "react-icons/ri";
import Chart from "./Home/Chart";
import { Link } from "react-router-dom";

const Statistics = () => {
  const data = {
    team: "BAL",
    sp: "J. Means",
    age: "32",
    weight: "220",
    winx_record: "12.2-9.8",
    awx: 0.589,
    a_1: "J. Means ranks #21 in AL",
    a_2: "Overall stuff ranks #17 for Left-hand pitchers.",
    blurb:
      "Ullamcorper ipsum feugiat placerat natoque consequat eu duis. Ultrices amet amet ac neque massa vitae convallis aenean.feugiat placerat natoque consequat eu duis. Ultrices",
  };
  return (
    <div className="p-3 relative">
      <Chart />
      <div className="">
        <h1 className="font-bold mb-3">Sp States</h1>
        <div className="border p-2 rounded-lg">
          <b>{data.sp}</b>
          <h1>Age: {data.age}</h1>
          <h1>Weight: {data.weight}</h1>
          <b>
            W/L Record: {data.winx_record} AWX: {data.awx}
          </b>
        </div>
        <h1 className="font-bold my-3">Analytics</h1>
        <div className="border p-2 rounded-lg">
          <b className="flex items-center gap-3">
            <span className="w-3 h-3 bg-pink-800 rounded"></span>
            {data.a_1}
          </b>
          <b className="flex items-center gap-3 mt-2">
            <RiStarFill className="text-green-500" />
            {data.a_2}
          </b>
        </div>
        <h1 className="font-bold my-3">Blurb</h1>
        <div className="border p-2 rounded-lg">
          <p className="text-sm text-justify">{data.blurb}</p>
        </div>
      </div>
      <Link to="/">
        <RiHome3Line className="bg-black text-white rounded-lg p-3 text-5xl fixed bottom-5 right-5" />
      </Link>
    </div>
  );
};

export default Statistics;
