import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { baseUrl } from "../Constant";
import { useParams } from "react-router-dom";
import CustomLoader from "../components/CustomLoader";

const NewsDetails = () => {

  const {id} = useParams();

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState({});

  const fetchAllNews = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${baseUrl}/news`);
      setNews(data[Number(id)+1].News);
    } catch (error) {
      toast.error("Something went wrong! homepgae");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    loading ? <CustomLoader /> : <div className="p-5">
      <h3 className="text-xl font-bold">{news[0]}</h3>
      {/* <p>
        <strong>Author:</strong> {author}
      </p> */}
      <p>
        <strong>Published Date:</strong> {news[2]}
      </p>
      {/* <p>
        <strong>Tags:</strong> {tags}
      </p>
      <p>
        <strong>Homepage Position:</strong> {homepageX}
      </p>
      <p>
        <strong>Blurb:</strong> {blurb}
      </p> */}
      <p className="line-clamp-1 mt-10">
        {news[7]}
      </p> 
       
      {/* <div className="flex flex-col">
        <a className="text-blue-500" href={`/`}>
          {link1}
        </a>
        <a className="text-blue-500" href={`/`}>
          {linkText1}
        </a>
      </div> */}
    </div>
  )
}

export default NewsDetails