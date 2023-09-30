import { Dropdown, Space } from "antd";
import { RiMenu5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "0",
  },
  {
    label: <Link to={"/"}>Bar Charts</Link>,
    key: "1",
  },
  {
    label: <Link to={"/scatterplot"}>Scatter Plot</Link>,
    key: "2",
  },
  {
    label: <Link to={"/about"}>About</Link>,
    key: "3",
  },
  {
    label: <Link to={"/faq"}>FAQ</Link>,
    key: "4",
  },
  {
    label: (
      <Link
        className="md:bg-black md:text-white md:py-2 md:px-6 md:rounded"
        to={"/contact"}
      >
        Contact
      </Link>
    ),
    key: "5",
  },
];

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
      <h4 className="font-bold text-xl">
        Sport-<span className="font-normal font-dancing">X</span> Model
      </h4>
      <div className="hidden md:flex gap-5">
        {items.map((item) => (
          <div className="text-lg font-semibold" key={item.key}>
            {item.label}
          </div>
        ))}
      </div>
      <Dropdown className="md:hidden" menu={{ items }} trigger={["click"]}>
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
