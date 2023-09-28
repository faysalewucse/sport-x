import { RiHome3Line, RiStarFill } from "react-icons/ri";
import MixedChart from "./Home/MixedChart";
import { Link, useParams } from "react-router-dom";
import { gamesData } from "../data/data";

const Statistics = () => {
  const { id } = useParams();

  const data = gamesData.find((team) => team._id === id);

  return (
    <div className="p-3 relative">
      <MixedChart
        x={data.x_arr.split(",")}
        y={data.y_arr.split(",")}
        barColor={data.bar_color}
        awx={data.awx}
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
