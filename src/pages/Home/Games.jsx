import GamesCard from "../../Cards/GamesCard";

const Games = ({ pairedTeams }) => {
  <div>
    <h1 className="font-bold">Games</h1>

    <div className="flex justify-between font-bold my-3 px-3">
      <h6 className="w-1/4">Time</h6>
      <h6 className="w-1/4">Team</h6>
      <h6 className="w-1/4">Starter</h6>
      <h6 className="w-1/4">Analytics</h6>
    </div>
    <div>
      {pairedTeams?.map((pair, index) => (
        <GamesCard key={index} pair={pair} />
      ))}
    </div>
  </div>;
};

export default Games;
