import { gamesData } from "../../data/data";

const ListedPlayers = ({ lastNames }) => {
  return (
    <div className="my-5">
      <h1 className="font-semibold text-center text-xl mb-5">Listed Teams</h1>
      <div className="flex flex-col gap-2">
        {gamesData
          ?.filter((game) => lastNames.includes(game.sp_name.split(" ").pop()))
          .map((game) => (
            <div className="bg-gray-300 p-1 rounded" key={game._id["$oid"]}>
              {game.sp_name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListedPlayers;
