import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "Money Market",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Fixed Income (31 Mutual Funds)",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Balance (43 Mutual Funds)",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Stocks (15 Mutual Funds)",
    children: <p>{text}</p>,
  },
];

const FaqPage = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-xl mb-5 text-center">
        Frequently Asked Questions
      </h1>
      <Collapse accordion items={items} />
    </div>
  );
};

export default FaqPage;
