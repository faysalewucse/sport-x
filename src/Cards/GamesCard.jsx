import { Link } from "react-router-dom";
import { BsFillTriangleFill, BsStarFill } from "react-icons/bs";

const GamesCard = ({ pair }) => {
  return (
    <div className="mb-3 border flex gap-2 justify-between rounded-lg">
      <div className="w-1/4 p-1 flex items-center justify-center flex-col text-xs">
        <h1>{pair[0].game_date}</h1>
        <b className="text-sm">{pair[0].game_time}</b>
      </div>
      <Link to={`/statistics/${pair[0]._id}`} className="flex-1 w-3/4">
        <div className="p-1 bg-gray-300 flex justify-between text-xs items-center font-semibold rounded-tr-md">
          <h1 className="w-1/3">{pair[0].team}</h1>
          <h1 className="w-1/3">{pair[0].sp_name}</h1>
          <h1 className="w-1/3 text-center flex justify-center gap-1">
            <span className="w-3 h-3 bg-pink-800 rounded"></span>
            <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
            <BsFillTriangleFill className="text-xs text-yellow-200" />
          </h1>
        </div>
        <Link
          to={`/statistics/${pair[1]._id}`}
          className="bg-gray-800 p-1 text-white flex justify-between text-xs items-center font-semibold rounded-br-md"
        >
          <h1 className="w-1/3">{pair[1].team}</h1>
          <h1 className="w-1/3">{pair[1].sp_name}</h1>
          <h1 className="w-1/3 text-center flex justify-center gap-1">
            <BsStarFill className="text-xs text-green-500" />
            <BsFillTriangleFill className="text-xs text-yellow-200" />
          </h1>
        </Link>
      </Link>
    </div>
  );
};

export default GamesCard;
