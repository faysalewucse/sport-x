import { Input } from "antd";

const TeamStates = ({ teamsData, selectedTeam }) => {
  return (
    <div className="font-semibold">
      <h6 className="text-center text-xl mb-5">Team Stats</h6>
      <div>
        <div className="mb-2 grid grid-cols-3 gap-2">
          <Input size="small" value={teamsData[selectedTeam].team} />
          <Input size="small" value={teamsData[selectedTeam].gid} />
          <Input size="small" value={teamsData[selectedTeam].game_time} />
          <Input size="small" value={teamsData[selectedTeam].game_date} />
          <Input value={teamsData[selectedTeam].Handed} />
          <Input size="small" value={teamsData[selectedTeam].age} />
          <Input size="small" value={teamsData[selectedTeam].height} />
          <Input size="small" value={teamsData[selectedTeam].weight} />
          <Input size="small" value={teamsData[selectedTeam].career_inn} />
        </div>
        <p>
          Analytics: 1st in Hitting, 12 in fielding, 23 in Hitting. Overall
          rating 9th
        </p>
        <p>Blurb: blah, blah, blah</p>
      </div>
    </div>
  );
};

export default TeamStates;
