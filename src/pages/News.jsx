import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../Constant";
import toast from "react-hot-toast";
import CustomLoader from "../components/CustomLoader";
import NewsCard from "../Cards/NewsCard";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});

  const fetchAllNews = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}/news`);
      setNews(data);
    } catch (error) {
      toast.error("Something went wrong! homepgae");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  return loading ? (
    <CustomLoader />
  ) : (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">News</h1>
      <div>
        {news?.map((n) => (
          <NewsCard newsInfo={n.News} key={n.id} />
        ))}
      </div>
    </div>
  );
};

export default News;
