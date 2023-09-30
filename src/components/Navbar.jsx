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
    label: <Link to={"/contact"}>Contact</Link>,
    key: "5",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <h4 className="font-bold text-xl">
        Sport-<span className="font-normal font-dancing">X</span> Model
      </h4>
      <Dropdown menu={{ items }} trigger={["click"]}>
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
