const TeamStates = ({ teamsData, selectedTeam }) => {
  return (
    <div className="font-semibold">
      <h6 className="text-center text-xl mb-5">Team Stats</h6>
      <div>
        <p>Team Record: 82-80</p>
        <p>Team AWX: {teamsData[selectedTeam].awx}</p>
        <p>W-L-ND: 53, 56, 69</p>
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
