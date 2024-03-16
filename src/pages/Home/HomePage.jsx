import { Link } from "react-router-dom";
import Cards from "./Cards";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { baseUrl } from "../../Constant";
import axios from "axios";
import toast from "react-hot-toast";
import CustomLoader from "../../components/CustomLoader";
import GamesCard from "../../Cards/GamesCard";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [firstGame, setFirstGame] = useState({});
  const [pairedTeams, setPairedTeams] = useState([]);

  const fetchFirstGame = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}/first`);
      setFirstGame(data.firstGame);

      setPairedTeams(data.pairedTeams);
    } catch (error) {
      toast.error("Something went wrong! homepgae");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFirstGame();
  }, []);

  return loading ? (
    <CustomLoader />
  ) : (
    <div className="p-3">
      <div>
        <b>Welcome back</b>
        <p>
          {firstGame?.sp_name} had excellent outing last night, check out his{" "}
          <Link
            className="text-blue-400"
            to={`statistics/${firstGame?.sp_id2}`}
          >
            player page
          </Link>
        </p>
        <Link to="/scatterplot" className="underline font-bold my-5 block">
          Visit us
        </Link>
      </div>
      <Cards />
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
      </div>
      <RiMenu3Fill className="bg-black p-3 text-5xl text-white rounded-lg rotate-90 fixed right-5 bottom-5" />
    </div>
  );
};

export default HomePage;
