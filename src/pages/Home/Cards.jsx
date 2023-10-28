import { Link } from "react-router-dom";
import { gamesData } from "../../data/data";

const Cards = () => {
  const data = [
    {
      img: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      details: (
        <p>
          {gamesData[0].sp_name} had excellent outing last night, check out his{" "}
          <Link
            className="text-blue-400"
            to={`statistics/${gamesData[0]._id["$oid"]}`}
          >
            player page
          </Link>
        </p>
      ),
    },
    {
      img: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
      details: (
        <p>
          {gamesData[0].sp_name} had excellent outing last night, check out his{" "}
          <Link
            className="text-blue-400"
            to={`statistics/${gamesData[0]._id["$oid"]}`}
          >
            player page
          </Link>
        </p>
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
          <p className="text-sm flex-1">{cardData.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
