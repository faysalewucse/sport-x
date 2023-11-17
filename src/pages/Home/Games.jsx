import GamesCard from "../../Cards/GamesCard";
import { useGameContext } from "../../context/GameContext";

const Games = () => {
  const { games } = useGameContext();

  const filterGamesData = games?.filter((item) => item.homepage_x === "ts");

  const pairedTeams = Array.from(
    { length: Math.ceil(filterGamesData.length / 2) },
    (_, index) => {
      const startIndex = index * 2;
      return filterGamesData.slice(startIndex, startIndex + 2);
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

      {pairedTeams?.map((pair, index) => (
        <GamesCard key={index} pair={pair} />
      ))}
    </div>
  );
};

export default Games;
