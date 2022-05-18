import React from "react";
import TeamOptionsRow from './TeamOptionsRow'

function TeamOptions({teams, setHomeTeam}) {
    return (
        <>
        {/* Loop through all teams */}
            <option value="0">&nbsp;</option>
            {teams.map((team) => <TeamOptionsRow team={team} setHomeTeam={setHomeTeam} key={team.team_id} />)}
        </>
        
    );
};

export default TeamOptions;