import { RiMenu5Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <h4 className="font-bold text-xl">
        Sport-<span className="font-normal font-dancing">X</span> Model
      </h4>
      <RiMenu5Line className="text-2xl" />
    </div>
  );
};

export default Navbar;
