import GamesCard from "../../Cards/GamesCard";

const Games = () => {
  const data = [
    {
      date: "10 June, 23",
      time: "10:30PM",
      teamName: "BAL",
      oponentsTeamName: "SDP",
      starter: "J.Means",
      oponentsTeamStarter: "Y. Darvish",
    },
    {
      date: "10 June, 23",
      time: "10:30PM",
      teamName: "BAL",
      oponentsTeamName: "SDP",
      starter: "J.Means",
      oponentsTeamStarter: "Y. Darvish",
    },
    {
      date: "10 June, 23",
      time: "10:30PM",
      teamName: "BAL",
      oponentsTeamName: "SDP",
      starter: "J.Means",
      oponentsTeamStarter: "Y. Darvish",
    },
  ];

  return (
    <div>
      <h1 className="font-bold">Games</h1>

      <div className="flex justify-between font-bold my-3 px-3">
        <h6 className="w-1/4">Time</h6>
        <h6 className="w-1/4">Team</h6>
        <h6 className="w-1/4">Starter</h6>
        <h6 className="w-1/4">Analytics</h6>
      </div>

      {data.map((gameData, index) => (
        <GamesCard key={index} data={gameData} />
      ))}
    </div>
  );
};

export default Games;
