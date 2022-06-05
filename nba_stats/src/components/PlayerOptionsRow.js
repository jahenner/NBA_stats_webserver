import React from "react";


function PlayerOptionsRow({player}) {
    return (
        // update value to id of team
        <option value={player.player_id}>{player.last_name}, {player.first_name}</option>
        
    );
};

export default PlayerOptionsRow;