import { Link } from "react-router-dom";
import Cards from "./Cards";
import Games from "./Games";
import { RiMenu3Fill } from "react-icons/ri";
import { useGameContext } from "../../context/GameContext";

const HomePage = () => {
  const { games } = useGameContext();

  return (
    <div className="p-3">
      <div>
        <b>Welcome back</b>
        <p>
          {games[0]?.sp_name} had excellent outing last night, check out his{" "}
          <Link className="text-blue-400" to={`statistics/${games[0]?.id}`}>
            player page
          </Link>
        </p>
        <Link to="/scatterplot" className="underline font-bold my-5 block">
          Visit us
        </Link>
      </div>

      <Cards />
      <Games />
      <RiMenu3Fill className="bg-black p-3 text-5xl text-white rounded-lg rotate-90 fixed right-5 bottom-5" />
    </div>
  );
};

export default HomePage;
