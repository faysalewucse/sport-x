import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 md:flex md:text-left md:text-md text-sm text-center justify-between">
      <div className="flex justify-between mb-3">
        <h1>All Rights Reserved @ 2023</h1>
        <div className="flex md:justify-start justify-center gap-1 md:gap-5">
          <Link>Terms</Link>
          <Link>Privacy</Link>
          <Link>Support</Link>
          <Link>FAQ</Link>
        </div>
      </div>
      <div className="flex md:justify-end justify-center gap-5 items-center">
        <h1 className="text-lg">Follow and post</h1>
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
