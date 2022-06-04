import React from "react";
import PlayerStats from "../pages/PlayerStats";
import PlayerOptionsRow from './PlayerOptionsRow'

function PlayerOptions({players}) {
    return (
        <>
        {/* Loop through all Players */}
            <option value="0">&nbsp;</option>
            {players.map((player) => <PlayerOptionsRow player={player} key={player.player_id} />)}
        </>
        
    );
};

export default PlayerOptions;