import NewsCard from "../../Cards/NewsCard";

const Cards = ({ news }) => {
  return (
    <div>
      {news
        ?.filter(
          (n) => n.homepage_x === "hpn_x_0" || n.homepage_x === "hpn_x_1"
        )
        .map((n, index) => (
          <NewsCard index={index} newsInfo={n.News} key={n.id} />
        ))}
    </div>
  );
};

export default Cards;
