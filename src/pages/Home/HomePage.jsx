import { Link } from "react-router-dom";
import Cards from "./Cards";
import Games from "./Games";

const HomePage = () => {
  return (
    <div className="p-3">
      <div>
        <b>Welcome back</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in
          ullam nihil quod facilis sint!
        </p>
        <Link to="/" className="underline font-bold my-5 block">
          Visit us
        </Link>
      </div>

      <Cards />
      <Games />
    </div>
  );
};

export default HomePage;
