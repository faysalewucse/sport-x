import GamesCard from "../../Cards/GamesCard";

const Games = () => {
  const data = [
    {
      _id: "64ee0068d985a555ca97e4a8",
      gid: "23_06_23_bal_sdn_1",
      game_time: "10:30 PM",
      game_date: "10, June, 23",
      team: "BAL",
      sp_name: "J. Means",
      age: "32",
      weight: "220",
      wx_record: "12.2-9.8",
      A_1: "J. Means ranks #21 in AL",
      A_2: "Overall stuff ranks #17 for Left-hand pitchers",
      Blurb:
        "Ullamcorper ipsum feugiat placerat natoque consequat eu duis. Ultrices amet corper ipsum feugiat placerat natoque consequat eu duis. Ultrices",
      y_arr: "800,435,724",
      x_arr: "4/4,4/11,4/17",
    },
    {
      _id: "64ee0068d985a555ca97e4a9",
      gid: "23_06_23_bal_sdn_1",
      game_time: "10:30 PM",
      game_date: "10, June, 23",
      team: "SDP",
      sp_name: "Y. Darvish",
      age: "34",
      weight: "230",
      wx_record: "14.7-11.3",
      A_1: "Y. Darvish ranks #3 in NL",
      A_2: "Overall stuff ranks #4 for Right-hand pitchers",
      Blurb:
        "Natoque Ullamcorper ipsum feugiat placerat natoque consequat eu duis. Ultrices amet corper ipsum feugiat placerat natoque consequat eu duis. Ultrices",
      y_arr: "515,735,780,640",
      x_arr: "7/14,7/17,4/22,4/27",
    },
    {
      _id: "64ee0068d985a555ca97e4a1",
      gid: "23_06_23_cin_cle_1",
      game_time: "7:10 PM",
      game_date: "10, June, 23",
      team: "CIN",
      sp_name: "G. Ashcraft",
      age: "27",
      weight: "185",
      wx_record: "4.4-5.6",
      A_1: "G. Ashcraft ranks #44 in NL",
      A_2: "Overall stuff ranks #47 for Left-hand pitchers",
      Blurb:
        "Ipsum Ulla mcorper ipsum feugiat placerat natoque consequat amet corper ipsum feugiat placerat natoque consequat eu duis. Ultrices",
      y_arr: "615,345",
      x_arr: "8/14,8/19",
    },
    {
      _id: "64ee0068d985a555ca97e4a4",
      gid: "23_06_23_cin_cle_1",
      game_time: "7:10 PM",
      game_date: "10, June, 23",
      team: "CLE",
      sp_name: "L. Allen",
      age: "29",
      weight: "195",
      wx_record: "7.1-7.9",
      A_1: "L. Allen ranks #54 in AL",
      A_2: "Overall stuff ranks #60 for Right-hand pitchers",
      Blurb:
        "Feugiat Ipsum Ulla mcorper ipsum feugiat placerat natoque consequat eu duis. placerat natoque consequat eu duis. Ultrices",
      y_arr: "715,750,822",
      x_arr: "5/14,5/19,5/23",
    },
  ];

  const result = Array.from(
    { length: Math.ceil(data.length / 2) },
    (_, index) => {
      const startIndex = index * 2;
      return data.slice(startIndex, startIndex + 2);
    }
  );

  return (
    <div>
      <h1 className="font-bold">Games</h1>

      <div className="flex justify-between font-bold my-3 px-3">
        <h6 className="w-1/4">Time</h6>
        <h6 className="w-1/4">Team</h6>
        <h6 className="w-1/4">Starter</h6>
        <h6 className="w-1/4">Analytics</h6>
      </div>

      {result.map((pair, index) => (
        <GamesCard key={index} pair={pair} />
      ))}
    </div>
  );
};

export default Games;
