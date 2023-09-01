import GamesCard from "../../Cards/GamesCard";
import { gamesData } from "../../data/data";

const Games = () => {
  const result = Array.from(
    { length: Math.ceil(gamesData.length / 2) },
    (_, index) => {
      const startIndex = index * 2;
      return gamesData.slice(startIndex, startIndex + 2);
    }
  );

  return (
    <div>
      <h1 className="font-bold">Games</h1>

      <div className="flex justify-between font-bold my-3 px-3">
        <h6 className="w-1/4">Time</h6>
        <h6 className="w-1/4">Team</h6>
        <h6 className="w-1/4">Starter</h6>
        <h6 className="w-1/4">Analytics</h6>
      </div>

      {result.map((pair, index) => (
        <GamesCard key={index} pair={pair} />
      ))}
    </div>
  );
};

export default Games;
