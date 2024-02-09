import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

const ListedPlayers = ({ lastNames, selectedTeam }) => {
  const navigate = useNavigate();

  const { season, games } = useGameContext();

  const tableData = games
    ?.filter((game) =>
      lastNames?.some(
        (name) =>
          game.sp_name
            .split(" ")
            .pop()
            .toLowerCase()
            .includes(name.toLowerCase()) &&
          game.team === selectedTeam &&
          game.sea == season
      )
    )
    .map((data, i) => {
      return {
        sp_id2: data.sp_id2,
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
              navigate(`/statistics/${record.sp_id2}`);
            },
          };
        }}
      />
    </div>
  );
};

export default ListedPlayers;
