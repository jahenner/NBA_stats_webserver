import React from "react";


function TeamsOptionsRow({team}) {
    return (
        // update value to id of team
        <option value={team.team_id} >{team.name}</option>
        
    );
};

export default TeamsOptionsRow;