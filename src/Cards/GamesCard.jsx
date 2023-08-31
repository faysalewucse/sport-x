import { Link } from "react-router-dom";

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
        <div className="p-1 bg-gray-300 flex justify-between items-center font-semibold">
          <h1 className="w-1/3">{data.teamName}</h1>
          <h1 className="w-1/3">{data.starter}</h1>
          <h1 className="w-1/3 text-center">{1}</h1>
        </div>
        <div className="bg-gray-800 p-1 text-white flex justify-between items-center font-semibold">
          <h1 className="w-1/3">{data.oponentsTeamName}</h1>
          <h1 className="w-1/3">{data.oponentsTeamStarter}</h1>
          <h1 className="w-1/3 text-center">{1}</h1>
        </div>
      </div>
    </Link>
  );
};

export default GamesCard;
