import { Dropdown, Space } from "antd";
import { RiMenu5Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    label: <Link to={"/"}>Home</Link>,
    route: "/",
    key: "0",
  },
  {
    label: <Link to={"/teams"}>Teams</Link>,
    route: "/teams",
    key: "1",
  },
  {
    label: <Link to={"/scatterplot"}>Scatter Plot</Link>,
    route: "/scatterplot",
    key: "2",
  },
  {
    label: <Link to={"/about"}>About</Link>,
    route: "/about",
    key: "3",
  },
  {
    label: <Link to={"/faq"}>FAQ</Link>,
    route: "/faq",
    key: "4",
  },
  {
    label: <Link to={"/contact"}>Contact</Link>,
    route: "/contact",
    key: "5",
  },
];

const Navbar = () => {
  const currentPath = useLocation();

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
      <Link to="/" className="font-bold text-xl">
        Sport-<span className="font-normal font-dancing">X</span> Model
      </Link>
      <div className="hidden lg:flex gap-5">
        {items.map((item) => (
          <div
            className={`${
              currentPath.pathname === item.route
                ? "md:bg-black md:text-white"
                : "text-lg font-semibold"
            } md:py-2 md:px-6 md:rounded`}
            key={item.key}
          >
            {item.label}
          </div>
        ))}
      </div>
      <Dropdown className="lg:hidden" menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <RiMenu5Line className="text-2xl" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default Navbar;
