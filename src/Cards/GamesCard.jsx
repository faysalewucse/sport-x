import { Link } from "react-router-dom";
import { BsFillTriangleFill, BsStarFill } from "react-icons/bs";

const GamesCard = ({ data }) => {
  return (
    <Link
      to="/statistics"
      className="mb-3 border flex gap-2 justify-between rounded-lg"
    >
      <div className="w-1/4 p-1 flex items-center justify-center flex-col">
        <h1 className="text-sm">{data.date}</h1>
        <b>{data.time}</b>
      </div>
      <div className="flex-1 w-3/4">
        <div className="p-1 bg-gray-300 flex justify-between items-center font-semibold rounded-tr-md">
          <h1 className="w-1/3">{data.teamName}</h1>
          <h1 className="w-1/3">{data.starter}</h1>
          <h1 className="w-1/3 text-center flex justify-center gap-1">
            <span className="w-3 h-3 bg-pink-800 rounded"></span>
            <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
            <BsFillTriangleFill className="text-xs text-yellow-200" />
          </h1>
        </div>
        <div className="bg-gray-800 p-1 text-white flex justify-between items-center font-semibold rounded-br-md">
          <h1 className="w-1/3">{data.oponentsTeamName}</h1>
          <h1 className="w-1/3">{data.oponentsTeamStarter}</h1>
          <h1 className="w-1/3 text-center flex justify-center gap-1">
            <BsStarFill className="text-xs text-green-500" />
            <BsFillTriangleFill className="text-xs text-yellow-200" />
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default GamesCard;
