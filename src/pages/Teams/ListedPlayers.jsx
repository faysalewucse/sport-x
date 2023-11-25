import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

const ListedPlayers = ({ lastNames }) => {
  const navigate = useNavigate();

  const { games } = useGameContext();

  const tableData = games
    .filter((game) => lastNames.includes(game.sp_name.split(" ").pop()))
    .map((data, i) => {
      return {
        id: data.id,
        serial: i + 1,
        name: <div>{data.sp_name}</div>,
        team: data.team,
        awx_twx: `${data.awx}, ${data.twx}`,
        cy_p: data.cy_p,
      };
    });

  const columns = [
    {
      title: "#",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Name(GS)",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "AWX, TWX",
      dataIndex: "awx_twx",
      key: "awx_twx",
    },
    {
      title: "Cy_p",
      dataIndex: "cy_p",
      key: "cy_p",
    },
  ];

  return (
    <div className="my-5">
      <h1 className="font-semibold text-center text-xl mb-5">Team Starters</h1>
      <Table
        size="small"
        className="my-10"
        dataSource={tableData}
        columns={columns}
        pagination={false}
        rowClassName="cursor-pointer"
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/statistics/${record.id}`);
            },
          };
        }}
      />
    </div>
  );
};

export default ListedPlayers;
