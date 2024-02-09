import { Link } from "react-router-dom";
import Cards from "./Cards";
import Games from "./Games";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { baseUrl } from "../../Constant";
import axios from "axios";
import toast from "react-hot-toast";
import CustomLoader from "../../components/CustomLoader";

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
            to={`statistics/${firstGame?.sp_id}_${firstGame?.team}`}
          >
            player page
          </Link>
        </p>
        <Link to="/scatterplot" className="underline font-bold my-5 block">
          Visit us
        </Link>
      </div>
      <Cards />

      <Games pairedTeams={pairedTeams} />
      <RiMenu3Fill className="bg-black p-3 text-5xl text-white rounded-lg rotate-90 fixed right-5 bottom-5" />
    </div>
  );
};

export default HomePage;
