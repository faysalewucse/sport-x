import { useState } from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ newsInfo, index }) => {
  // Destructure fields from the newsInfo array
  const title = newsInfo[0];
  const author = newsInfo[1];
  const publishedDate = newsInfo[2];
  const links = newsInfo[3];
  const linkText = newsInfo[4];
  const tags = newsInfo[5];
  const homepageX = newsInfo[6];
  const blurb = newsInfo[7];

  // Split the links field
  const [link1, link2] = links.split("|");
  const [linkText1, linkText2] = linkText.split("|");

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    } else {
      return text;
    }
  };

  return (
    <div className="border mb-5 p-5 rounded-md cursor-pointer hover:shadow-md transform transition-300">
      <h3 className="text-xl font-bold">{title}</h3>
      {/* <p>
        <strong>Author:</strong> {author}
      </p> */}
      <p>
        <strong>Published Date:</strong> {publishedDate}
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
      <p>{isExpanded ? blurb : truncateText(blurb, 10)}</p>

      <button
        className="text-xs text-blue-500 underline"
        onClick={toggleExpanded}
      >
        {isExpanded ? "Show less" : "Read More"}
      </button>

      {/* <div className="flex flex-col">
        <a className="text-blue-500" href={`/`}>
          {link1}
        </a>
        <a className="text-blue-500" href={`/`}>
          {linkText1}
        </a>
      </div> */}
    </div>
  );
};

export default NewsCard;
