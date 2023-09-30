import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl px-5 flex justify-between">
      <h1>All Rights Reserved @ 2023</h1>
      <div className="flex gap-5">
        <Link>Terms</Link>
        <Link>Privacy</Link>
        <Link>Support</Link>
        <Link>FAQ</Link>
      </div>
      <div className="flex gap-5 items-center">
        <h1>Follow and post</h1>
        <div className="flex items-center gap-5 text-xl">
          <RiFacebookCircleLine />
          <RiInstagramLine />
          <RiTwitterLine />
          <RiLinkedinBoxLine />
        </div>
      </div>
    </div>
  );
};

export default Footer;
