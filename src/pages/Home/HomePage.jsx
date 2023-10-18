import { Link } from "react-router-dom";
import Cards from "./Cards";
import Games from "./Games";
import { RiMenu3Fill } from "react-icons/ri";
import { Select } from "antd";

const HomePage = () => {

  return (
    <div className="p-3">
      <div>
        <b>Welcome back</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in
          ullam nihil quod facilis sint!
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
