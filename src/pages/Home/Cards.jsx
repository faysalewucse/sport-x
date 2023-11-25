import { Link } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

const Cards = () => {
  const { games } = useGameContext();

  const data = [
    {
      img: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      details: (
        <div>
          {games[0]?.sp_name} had excellent outing last night, check out his{" "}
          <Link className="text-blue-400" to={`statistics/${games[0]?.id}`}>
            player page
          </Link>
        </div>
      ),
    },
    {
      img: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      details: (
        <div>
          {games[0]?.sp_name} had excellent outing last night, check out his{" "}
          <Link className="text-blue-400" to={`statistics/${games[0]?.id}`}>
            player page
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      {data.map((cardData, index) => (
        <div
          className={`mb-3 flex gap-3 border p-2 rounded-lg ${
            index % 2 && "flex-row-reverse"
          }`}
          key={index}
        >
          <img
            className="w-20 rounded-md h-20 object-cover"
            src={cardData.img}
            alt="card_img"
          />
          <div className="text-sm flex-1">{cardData.details}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
